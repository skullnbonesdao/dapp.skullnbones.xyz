import { defineStore } from 'pinia';
import { Connection } from '@solana/web3.js';
import { RPC_NETWORKS } from './interfaces/RPC_Networks';
import { useLocalStorage } from '@vueuse/core';
import axios, { AxiosRequestConfig } from 'axios';
import { api, apiJsonBin } from 'boot/axios';
import { useGlobalStore } from 'stores/globalStore';

const BIN = '66b6b699e41b4d34e41e3c95';
const key = import.meta.env.VITE_JSONBINKEY as string;
const config = {
  headers: {
    'X-Access-key': key,
    'Content-Type': 'application/json',
  },
} as AxiosRequestConfig;

export interface I_JsonBin {
  record: I_Record[];
  metadata: I_Metadata;
}

export interface I_Metadata {
  id: string;
  private: boolean;
  createdAt: Date;
}

export interface I_Record {
  timestamp: number;
  jobType: number;
  name: string;
  description: string;
  assigned: string;
  reward: string;
}

export const useJsonBinStore = defineStore('jsonBin', {
  state: () => ({
    data: {} as I_JsonBin,
  }),
  actions: {
    add(newJob: I_Record) {
      newJob.timestamp = Math.floor(Date.now() / 1000);
      useJsonBinStore().data.record.push(newJob);
    },
    remove(job: I_Record) {
      this.data.record = this.data.record.filter(
        (d) => d.timestamp != job.timestamp,
      );
    },
    read() {
      apiJsonBin
        .get(`/${BIN}/latest`, config)
        .then((resp) => {
          console.log(resp);
          this.data = resp.data as I_JsonBin;
        })
        .catch(function (error) {
          console.error(error);
        });

      console.log('[jsonBin] get');
    },
    async update() {
      if (useGlobalStore().is_admin || import.meta.env.DEV) {
        apiJsonBin
          .put(`/${BIN}`, JSON.stringify(this.data.record), config)
          .then((resp) => console.log(resp))
          .catch(function (error) {
            console.error(error);
          });
        console.log('[jsonBin] put');
      }
    },
  },
});

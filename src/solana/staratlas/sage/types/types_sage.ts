import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

export type AddCrewInput = {
  items: any;
};

export type AddShipEscrowInput = {
  shipAmount: BN;
  index: any;
};

export type AddShipToFleetInput = {
  shipAmount: number;
  shipEscrowIndex: number;
  fleetShipInfoIndex: any;
  keyIndex: number;
};

export type Cargo = {
  statsDefinition: PublicKey;
};

export type CargoStats = {
  cargoCapacity: number;
  fuelCapacity: number;
  ammoCapacity: number;
  ammoConsumptionRate: number;
  foodConsumptionRate: number;
  miningRate: number;
  upgradeRate: number;
  cargoTransferRate: number;
  tractorBeamGatherRate: number;
};

export type CargoStatsUnpacked = {
  cargoCapacity: number;
  fuelCapacity: number;
  ammoCapacity: number;
  ammoConsumptionRate: number;
  foodConsumptionRate: number;
  miningRate: number;
  upgradeRate: number;
  cargoTransferRate: number;
  tractorBeamGatherRate: number;
};

export type CargoToGameInput = {
  amount: BN;
  keyIndex: number;
};

export type CloseDisbandedFleetInput = {
  keyIndex: number;
};

export type Crafting = {
  domain: PublicKey;
};

export enum CraftingInstanceType { "StarbaseCrafting" , "StarbaseUpgradeMaterial" };

export type CreateFleetInput = {
  shipAmount: number;
  fleetLabel: number[];
  shipEscrowIndex: number;
  cargoHoldSeeds: number[];
  fuelTankSeeds: number[];
  ammoBankSeeds: number[];
  keyIndex: number;
};

export type CrewTransferInput = {
  dataHash: number[];
  proofCount: number;
  leafIndex: number;
};

export type DepositCargoToFleetInput = {
  amount: BN;
  keyIndex: number;
};

export type DepositStarbaseUpkeepResourceInput = {
  pointsProgramPermissionsKeyIndex: number;
  sagePermissionsKeyIndex: number;
  resourceType: number;
  resourceIndex: number;
  amount: BN;
  epochIndex: number;
};

export type DeregisterSurveyDataUnitTrackerInput = {
  keyIndex: number;
};

export type DisbandFleetInput = {
  keyIndex: number;
};

export type DisbandedFleetToEscrowInput = {
  shipAmount: number;
  shipEscrowIndex: any;
  fleetShipInfoIndex: number;
  keyIndex: number;
};

export type DiscoverSectorInput = {
  coordinates: BN[];
  keyIndex: number;
};

export type FactionsStarbaseLevelInfo = {
  mud: any[];
  oni: any[];
  ustur: any[];
};

export type FleetCrewInput = {
  count: number;
  keyIndex: number;
};

export type FleetInfo = {
  starbaseLevels: any;
  upkeep: any;
  maxFleetSize: number;
};

export type FleetInput = {
  starbaseLevelInfoArray: any;
  upkeepInfoArray: any;
  maxFleetSize: any;
};

export type FleetShipsInfo = {
  ship: PublicKey;
  amount: BN;
  updateId: BN;
};

export type ForcedDisbandFleetInput = {
  fleetShipInfoIndex: number;
};

export type Idle = {
  sector: BN[];
};

export type IdleToRespawnInput = {
  keyIndex: number;
};

export type IngredientIndexInput = {
  ingredientIndex: number;
};

export type InitGameStateInput = {
  keyIndex: number;
};

export type KeyIndexInput = {
  keyIndex: number;
};

export enum LocationType { "Planet" };

export type ManageGameInput = {
  keyIndex: number;
};

export type MineAsteroid = {
  asteroid: PublicKey;
  resource: PublicKey;
  start: BN;
  end: BN;
  amountMined: BN;
  lastUpdate: BN;
};

export type MineAsteroidToRespawnInput = {
  keyIndex: number;
};

export type Mints = {
  atlas: PublicKey;
  polis: PublicKey;
  ammo: PublicKey;
  food: PublicKey;
  fuel: PublicKey;
  repairKit: PublicKey;
};

export type MiscStats = {
  requiredCrew: number;
  passengerCapacity: number;
  crewCount: number;
  rentedCrew: number;
  respawnTime: number;
  scanCoolDown: number;
  sduPerScan: number;
  scanCost: number;
  placeholder: number;
  placeholder2: number;
  placeholder3: number;
};

export type MiscStatsUnpacked = {
  requiredCrew: number;
  passengerCapacity: number;
  crewCount: number;
  rentedCrew: number;
  respawnTime: number;
  scanCoolDown: number;
  sduPerScan: number;
  scanCost: number;
  placeholder: number;
  placeholder2: number;
  placeholder3: number;
};

export type MiscVariables = {
  warpLaneFuelCostReduction: number;
  respawnFee: BN;
  upkeepMiningEmissionsPenalty: number;
};

export type MiscVariablesInput = {
  warpLaneFuelCostReduction: any;
  upkeepMiningEmissionsPenalty: any;
  respawnFee: any;
};

export type MoveSubwarp = {
  fromSector: BN[];
  toSector: BN[];
  currentSector: BN[];
  departureTime: BN;
  arrivalTime: BN;
  fuelExpenditure: BN;
  lastUpdate: BN;
};

export type MoveWarp = {
  fromSector: BN[];
  toSector: BN[];
  warpStart: BN;
  warpFinish: BN;
};

export type MovementStats = {
  subwarpSpeed: number;
  warpSpeed: number;
  maxWarpDistance: number;
  warpCoolDown: number;
  subwarpFuelConsumptionRate: number;
  warpFuelConsumptionRate: number;
  planetExitFuelAmount: number;
};

export type MovementStatsUnpacked = {
  subwarpSpeed: number;
  warpSpeed: number;
  maxWarpDistance: number;
  warpCoolDown: number;
  subwarpFuelConsumptionRate: number;
  warpFuelConsumptionRate: number;
  planetExitFuelAmount: number;
};

export type OptionalNonSystemPubkey = {
  key: PublicKey;
};

export enum PlanetType { "Terrestrial" , "Volcanic" , "Barren" , "AsteroidBelt" , "GasGiant" , "IceGiant" , "Dark" };

export type Points = {
  lpCategory: any;
  councilRankXpCategory: any;
  pilotXpCategory: any;
  dataRunningXpCategory: any;
  miningXpCategory: any;
  craftingXpCategory: any;
};

export type ProgressionItem = {
  value: number;
};

export type ProgressionItemInput = {
  itemType: number;
  item: any;
};

export type ProgressionItemInputUnpacked = {
  itemType: number;
  item: any;
};

export enum ProgressionItemType { "Subwarp" , "Warp" , "WarpLane" , "AsteroidExit" , "ScanUnsuccessful" , "ScanSuccessful" , "Mining" , "Crafting" , "Upkeep" , "Upgrade" };

export type ProgressionItemUnpacked = {
  value: number;
};

export type RegisterMineItemInput = {
  name: number[];
  resourceHardness: number;
  keyIndex: number;
};

export type RegisterPlanetInput = {
  name: number[];
  size: BN;
  maxHp: BN;
  subCoordinates: BN[];
  planetType: number;
  position: number;
  keyIndex: number;
};

export type RegisterProgressionConfigInput = {
  dailyLpLimit: any;
  dailyCouncilRankXpLimit: any;
  dailyPilotXpLimit: any;
  dailyDataRunningXpLimit: any;
  dailyMiningXpLimit: any;
  dailyCraftingXpLimit: any;
  keyIndex: number;
};

export type RegisterResourceInput = {
  locationType: number;
  systemRichness: number;
  keyIndex: number;
};

export type RegisterSagePointsModifierInput = {
  pointsCategoryType: number;
  keyIndex: number;
};

export type RegisterShipInput = {
  name: number[];
  sizeClass: any;
  stats: any;
  keyIndex: number;
  isActive: boolean;
};

export type RegisterStarInput = {
  name: number[];
  size: BN;
  subCoordinates: BN[];
  starType: number;
  keyIndex: number;
};

export type RegisterStarbaseInput = {
  name: number[];
  subCoordinates: BN[];
  starbaseLevelIndex: number;
  faction: number;
  keyIndex: number;
};

export type RegisterStarbaseInputUnpacked = {
  name: number[];
  subCoordinates: BN[];
  starbaseLevelIndex: number;
  faction: number;
  keyIndex: number;
};

export type RegisterSurveyDataUnitTrackerInput = {
  coordinatesRange: BN[];
  cssCoordinates: any[];
  originCoordinates: BN[];
  cssMaxDistance: number;
  originMaxDistance: number;
  distanceWeighting: number;
  tMax: BN;
  xMul: number;
  yMul: number;
  zMul: number;
  sduMaxPerSector: number;
  scanChanceRegenPeriod: number;
  keyIndex: number;
};

export type RemoveCrewInput = {
  items: any;
  keyIndex: number;
};

export type RemoveShipEscrowInput = {
  shipAmount: BN;
  permissionKeyIndex: number;
  shipEscrowIndex: number;
};

export type Respawn = {
  sector: BN[];
  start: BN;
};

export type RespawnToLoadingBayInput = {
  keyIndex: number;
};

export type RiskZoneData = {
  center: BN[];
  radius: BN;
};

export type RiskZoneDataUnpacked = {
  center: BN[];
  radius: BN;
};

export type RiskZonesData = {
  mudSecurityZone: any;
  oniSecurityZone: any;
  usturSecurityZone: any;
  highRiskZone: any;
  mediumRiskZone: any;
};

export type RiskZonesDataUnpacked = {
  mudSecurityZone: any;
  oniSecurityZone: any;
  usturSecurityZone: any;
  highRiskZone: any;
  mediumRiskZone: any;
};

export type SagePointsCategory = {
  category: PublicKey;
  modifier: PublicKey;
  modifierBump: number;
};

export type ScanForSurveyDataUnitsInput = {
  keyIndex: number;
};

export type SectorConnection = {
  connectionSector: PublicKey;
  subCoordinates: BN[];
  flags: number;
};

export enum SectorRing { "Inner" , "Mid" , "Outer" };

export type ShipCounts = {
  total: number;
  updated: number;
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  capital: number;
  commander: number;
  titan: number;
};

export type ShipCountsUnpacked = {
  total: number;
  updated: number;
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  capital: number;
  commander: number;
  titan: number;
};

export type ShipSizes = {
  xxSmall: number;
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  capital: number;
  commander: number;
  titan: number;
};

export type ShipStats = {
  movementStats: any;
  cargoStats: any;
  miscStats: any;
};

export type ShipStatsUnpacked = {
  movementStats: any;
  cargoStats: any;
  miscStats: any;
};

export enum SizeClass { "XxSmall" , "XSmall" , "Small" , "Medium" , "Large" , "Capital" , "Commander" , "Titan" };

export enum StarType { "WhiteDwarf" , "RedDwarf" , "Solar" , "HotBlue" , "RedGiant" };

export type StarbaseCreateCargoPodInput = {
  podSeeds: number[];
  keyIndex: number;
};

export type StarbaseCreateCraftingProcessInput = {
  craftingId: BN;
  recipeCategoryIndex: number;
  quantity: BN;
  numCrew: BN;
  keyIndex: number;
};

export type StarbaseDepositCraftingIngredientInput = {
  amount: BN;
  ingredientIndex: number;
  keyIndex: number;
};

export type StarbaseLevelInfo = {
  recipeForUpgrade: PublicKey;
  recipeCategoryForLevel: PublicKey;
  hp: BN;
  sp: BN;
  sectorRingAvailable: number;
  warpLaneMovementFee: BN;
};

export type StarbaseLevelInfoArrayInput = {
  level: number;
  faction: number;
  hp: BN;
  sp: BN;
  sectorRingAvailable: any;
  warpLaneMovementFee: BN;
};

export type StarbaseLoadingBay = {
  starbase: PublicKey;
  lastUpdate: BN;
};

export type StarbaseRemoveCargoPodInput = {
  keyIndex: number;
};

export enum StarbaseState { "Active" , "Destroyed" };

export type StarbaseTransferCargoInput = {
  amount: BN;
  keyIndex: number;
};

export enum StarbaseUpgradeState { "NotStarted" , "Started" , "Completed" };

export type StarbaseUpkeepInfo = {
  ammoReserve: BN;
  ammoDepletionRate: number;
  foodReserve: BN;
  foodDepletionRate: number;
  toolkitReserve: BN;
  toolkitDepletionRate: number;
};

export type StarbaseUpkeepInfoArrayInput = {
  level: number;
  info: any;
};

export type StarbaseUpkeepInfoUnpacked = {
  ammoReserve: BN;
  ammoDepletionRate: number;
  foodReserve: BN;
  foodDepletionRate: number;
  toolkitReserve: BN;
  toolkitDepletionRate: number;
};

export type StarbaseUpkeepLevels = {
  level0: any;
  level1: any;
  level2: any;
  level3: any;
  level4: any;
  level5: any;
  level6: any;
};

export type StarbaseUpkeepLevelsUnpacked = {
  level0: any;
  level1: any;
  level2: any;
  level3: any;
  level4: any;
  level5: any;
  level6: any;
};

export type StarbaseWithdrawCraftingIngredientInput = {
  amount: BN;
  ingredientIndex: number;
  keyIndex: number;
};

export type StartSubwarpInput = {
  toSector: BN[];
  keyIndex: number;
};

export type StopMiningAsteroidInput = {
  keyIndex: number;
};

export type StopSubwarpInput = {
  keyIndex: number;
};

export type SubmitStarbaseUpgradeResourceInput = {
  pointsProgramPermissionsKeyIndex: number;
  sagePermissionsKeyIndex: number;
  upgradeProcessRecipeInputIndex: number;
  starbaseUpgradeRecipeInputIndex: number;
  resourceRecipeOutputIndex: number;
  epochIndex: number;
};

export type TransferCargoWithinFleetInput = {
  amount: BN;
  keyIndex: number;
};

export type UpdateGameInput = {
  cargo: number;
  crafting: number;
  mints: number;
  vaults: number;
  points: number;
  riskZones: any;
  keyIndex: number;
};

export type UpdateGameStateInput = {
  fleet: any;
  misc: any;
  keyIndex: number;
};

export type UpdateMineItemInput = {
  name: any;
  resourceHardness: any;
  keyIndex: number;
};

export type UpdatePlanetInput = {
  name: any;
  size: any;
  maxHp: any;
  subCoordinates: any;
  keyIndex: number;
};

export type UpdateProgressionConfigInput = {
  keyIndex: number;
  dailyLpLimit: any;
  dailyCouncilRankXpLimit: any;
  dailyPilotXpLimit: any;
  dailyDataRunningXpLimit: any;
  dailyMiningXpLimit: any;
  dailyCraftingXpLimit: any;
  items: any;
};

export type UpdateResourceInput = {
  systemRichness: any;
  keyIndex: number;
};

export type UpdateShipEscrowInput = {
  shipEscrowIndex: number;
};

export type UpdateShipFleetInput = {
  shipAmount: number;
  fleetShipInfoIndex: number;
};

export type UpdateShipInput = {
  name: number[];
  sizeClass: any;
  stats: any;
  keyIndex: number;
};

export type UpdateStarInput = {
  name: any;
  size: any;
  starType: any;
  keyIndex: number;
};

export type UpdateStarbaseInput = {
  name: any;
  subCoordinates: any;
  keyIndex: number;
};

export type UpdateSurveyDataUnitTrackerInput = {
  coordinatesRange: any;
  cssCoordinates: any;
  originCoordinates: any;
  cssMaxDistance: any;
  originMaxDistance: any;
  distanceWeighting: any;
  tMax: any;
  xMul: any;
  yMul: any;
  zMul: any;
  sduMaxPerSector: any;
  scanChanceRegenPeriod: any;
  keyIndex: number;
};

export enum UpkeepResourceType { "Ammo" , "Food" , "Toolkit" };

export type Vaults = {
  atlas: PublicKey;
  polis: PublicKey;
};

export type WarpLaneInput = {
  keyIndex: number;
  toSectorIndex: number;
  fromSectorIndex: number;
};

export type WarpToCoordinateInput = {
  keyIndex: number;
  toSector: BN[];
};

export type WithdrawCargoFromFleetInput = {
  amount: BN;
  keyIndex: number;
};

export type WrappedShipEscrow = {
  ship: PublicKey;
  amount: BN;
  updateId: BN;
};

export type CraftingInstance = {
  version: number;
  seqId: number;
  authority: PublicKey;
  craftingProcess: PublicKey;
  instanceType: number;
  numCrew: BN;
  bump: number;
};

export type DisbandedFleet = {
  version: number;
  gameId: PublicKey;
  ownerProfile: PublicKey;
  starbase: PublicKey;
  fleetLabel: number[];
  fleetShips: PublicKey;
  bump: number;
};

export type Fleet = {
  version: number;
  gameId: PublicKey;
  ownerProfile: PublicKey;
  fleetShips: PublicKey;
  subProfile: any;
  subProfileInvalidator: PublicKey;
  faction: number;
  fleetLabel: number[];
  shipCounts: any;
  warpCooldownExpiresAt: BN;
  scanCooldownExpiresAt: BN;
  stats: any;
  cargoHold: PublicKey;
  fuelTank: PublicKey;
  ammoBank: PublicKey;
  updateId: BN;
  bump: number;
};

export type FleetShips = {
  version: number;
  fleet: PublicKey;
  fleetShipsInfoCount: number;
  bump: number;
};

export type Game = {
  version: number;
  updateId: BN;
  profile: PublicKey;
  gameState: PublicKey;
  points: any;
  cargo: any;
  crafting: any;
  mints: any;
  vaults: any;
  riskZones: any;
};

export type GameState = {
  version: number;
  updateId: BN;
  gameId: PublicKey;
  fleet: any;
  misc: any;
  bump: number;
};

export type MineItem = {
  version: number;
  gameId: PublicKey;
  name: number[];
  mint: PublicKey;
  resourceHardness: number;
  numResourceAccounts: BN;
  bump: number;
};

export type Planet = {
  version: number;
  name: number[];
  gameId: PublicKey;
  sector: BN[];
  subCoordinates: BN[];
  planetType: number;
  position: number;
  size: BN;
  maxHp: BN;
  currentHealth: BN;
  amountMined: BN;
  numResources: number;
  numMiners: BN;
};

export type PlayerCrewRecord = {
  version: number;
  playerProfile: PublicKey;
  crewConfig: PublicKey;
  gameId: PublicKey;
  count: number;
  bump: number;
};

export type ProgressionConfig = {
  version: number;
  gameId: PublicKey;
  dailyLpLimit: BN;
  dailyCouncilRankXpLimit: BN;
  dailyPilotXpLimit: BN;
  dailyDataRunningXpLimit: BN;
  dailyMiningXpLimit: BN;
  dailyCraftingXpLimit: BN;
  numItems: number;
};

export type Resource = {
  version: number;
  gameId: PublicKey;
  location: PublicKey;
  mineItem: PublicKey;
  locationType: number;
  systemRichness: number;
  amountMined: BN;
  numMiners: BN;
  bump: number;
};

export type SageCrewConfig = {
  version: number;
  gameId: PublicKey;
  config: PublicKey;
  bump: number;
};

export type SagePlayerProfile = {
  version: number;
  playerProfile: PublicKey;
  gameId: PublicKey;
  bump: number;
};

export type Sector = {
  version: number;
  gameId: PublicKey;
  coordinates: BN[];
  discoverer: PublicKey;
  name: number[];
  numStars: number;
  numPlanets: number;
  numMoons: number;
  numAsteroidBelts: number;
  lastScanTime: BN;
  lastScanChance: number;
  bump: number;
  numConnections: number;
};

export type Ship = {
  version: number;
  gameId: PublicKey;
  mint: PublicKey;
  name: number[];
  sizeClass: number;
  stats: any;
  updateId: BN;
  maxUpdateId: BN;
  next: any;
};

export type Star = {
  version: number;
  name: number[];
  gameId: PublicKey;
  sector: BN[];
  size: BN;
  subCoordinates: BN[];
  starType: number;
};

export type Starbase = {
  version: number;
  gameId: PublicKey;
  sector: BN[];
  craftingFacility: PublicKey;
  upgradeFacility: PublicKey;
  name: number[];
  subCoordinates: BN[];
  faction: number;
  bump: number;
  seqId: number;
  state: number;
  level: number;
  hp: BN;
  sp: BN;
  sectorRingAvailable: number;
  upgradeState: number;
  upgradeIngredientsChecksum: number[];
  numUpgradeIngredients: number;
  upkeepAmmoBalance: BN;
  upkeepAmmoLastUpdate: BN;
  upkeepAmmoGlobalLastUpdate: BN;
  upkeepFoodBalance: BN;
  upkeepFoodLastUpdate: BN;
  upkeepFoodGlobalLastUpdate: BN;
  upkeepToolkitBalance: BN;
  upkeepToolkitLastUpdate: BN;
  upkeepToolkitGlobalLastUpdate: BN;
  builtDestroyedTimestamp: BN;
};

export type StarbasePlayer = {
  version: number;
  playerProfile: PublicKey;
  gameId: PublicKey;
  starbase: PublicKey;
  sagePlayerProfile: PublicKey;
  bump: number;
  shipEscrowCount: number;
  oldTotalCrew: number;
  newTotalCrew: number;
  busyCrew: BN;
  updateId: BN;
  updatedShipEscrowCount: number;
};

export type SurveyDataUnitTracker = {
  version: number;
  gameId: PublicKey;
  sduMint: PublicKey;
  resourceMint: PublicKey;
  signer: PublicKey;
  signerBump: number;
  coordinatesRange: BN[];
  cssCoordinates: any[];
  originCoordinates: BN[];
  cssMaxDistance: number;
  originMaxDistance: number;
  distanceWeighting: number;
  tMax: BN;
  xMul: number;
  yMul: number;
  zMul: number;
  sduMaxPerSector: number;
  scanChanceRegenPeriod: number;
};
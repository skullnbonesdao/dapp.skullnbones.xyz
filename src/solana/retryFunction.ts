export async function retryFunction<T>(
  func: () => Promise<T>, // Function to call
  retries = 3, // Number of retries
  delay = 1000, // Delay between retries in milliseconds
): Promise<T> {
  let attempts = 0;

  while (attempts < retries) {
    try {
      return await func(); // Try executing the function
    } catch (error) {
      attempts++;
      if (attempts >= retries) {
        throw new Error(
          `Function ${func.name} failed after ${attempts} attempts: ${error}`,
        );
      }
      console.log(
        `Retry ${func.name}() | ${attempts}/${retries} failed. Retrying in ${delay}ms...`,
      );
      await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
    }
  }

  throw new Error('This line should never be reached.');
}

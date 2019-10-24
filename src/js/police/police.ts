
export const getCrimes = async (lat, long): Promise<any> => {
  const response = await fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${long}&date=2017-01`);
  return await response.json();
}
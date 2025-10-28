export const getAllProducts=(ProductStorage)=>{
  return [
    ...ProductStorage.MenCollections ||[],
    ...ProductStorage.WomenCollections ||[],
    ...ProductStorage.Hamper ||[],
  ];
};
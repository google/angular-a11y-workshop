
export interface Cat {
  name: string;
  description: string;
  imageCredit: string;
}

export type CatCatalog = {[key: number]: Cat};

export const InitialCatData: CatCatalog = {
  1: {
    name: 'Sphynx',
    description: 'The Sphynx cat is a breed of cat known for its lack of coat. It was developed through selective breeding, starting in the 1960s. The skin should have the texture of chamois, as it has fine hairs.',
    imageCredit: ''
  },
  2: {
    name: 'Maine Coon',
    description: 'The Maine Coon is one of the largest domesticated breeds of cat. It has a distinctive physical appearance and valuable hunting skills.',
    imageCredit: '',
  }
};

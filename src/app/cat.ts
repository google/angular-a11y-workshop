
export interface Cat {
  name: string;
  description: string;
  breed: string;
  imgUrl?: string;
  imgCredit: string;
}

export type CatCatalog = {[key: number]: Cat};

export const InitialCatData: CatCatalog = {
  1: {
    name: 'Odo',
    breed: 'Sphynx',
    description: 'The Sphynx cat is a breed of cat known for its lack of coat. It was developed through selective breeding, starting in the 1960s. The skin should have the texture of chamois, as it has fine hairs.',
    imgCredit: 'Jason Barbour and Ashley Barbour. Instagram: @mostly_kitten_pics',
    imgUrl: '/assets/photos/odo.png'
  },
  2: {
    name: 'Kahless',
    breed: 'Maine Coon',
    description: 'The Maine Coon is one of the largest domesticated breeds of cat. It has a distinctive physical appearance and valuable hunting skills.',
    imgCredit: 'Jason Barbour and Ashley Barbour. Instagram: @mostly_kitten_pics',
    imgUrl: '/assets/photos/kahless.png'
  },
  3: {
    name: 'Peludo',
    breed: 'Mixed',
    description: 'The adorable cat of ngColombia\'s founder.',
    imgCredit: 'Juan Herrera. Twitter: @jdjuan',
    imgUrl: '/assets/photos/peludo.jpg'
  },
  4: {
    name: 'Zimo',
    breed: 'Mixed',
    description: 'He\'s a mixed breed, but looks like Birman. His coloration is called Seal Point.',
    imgCredit: 'Maya Carlyle.',
    imgUrl: '/assets/photos/zimo.jpg'
  }
};

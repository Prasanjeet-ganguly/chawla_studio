export interface StudioImage {
  src: string;
  alt: string;
  label: string;
  category?: string;
}

export interface StudioAssets {
  heroPhotographer: string;
  floatingPhotos: {
    wedding: StudioImage;
    maternity: StudioImage;
    newborn: StudioImage;
    preWedding: StudioImage;
  };
  filmRoll: string;
}

export const studioAssets: StudioAssets = {
  heroPhotographer: '/photos/0f5a6393-1200.jpg',
  floatingPhotos: {
    wedding: {
      src: '/photos/0f5a4587-1200.jpg',
      alt: 'Wedding couple ritual portrait — Chawla Studio',
      label: 'Weddings',
      category: 'Weddings',
    },
    maternity: {
      src: '/photos/0f5a6329-1200.jpg',
      alt: 'Fine art maternity portrait in golden light — Chawla Studio',
      label: 'Maternity',
      category: 'Maternity',
    },
    newborn: {
      src: '/photos/0f5a6604-1200.jpg',
      alt: 'Newborn and infant soft portrait — Chawla Studio',
      label: 'New Born',
      category: 'New Born',
    },
    preWedding: {
      src: '/photos/0f5a6488-1200.jpg',
      alt: 'Pre-wedding couple celebrate in sparks — Chawla Studio',
      label: 'Pre-Wedding',
      category: 'Pre-Wedding',
    },
  },
  filmRoll: '/photos/0f5a9856-1200.jpg',
};

export const studioStats = [
  {
    value: '10+',
    label: 'Years Experience',
    icon: 'camera',
  },
  {
    value: '5000+',
    label: 'Happy Clients',
    icon: 'users',
  },
  {
    value: '10000+',
    label: 'Memories Captured',
    icon: 'image',
  },
  {
    value: 'Award',
    label: 'Winning Studio',
    icon: 'trophy',
  },
];

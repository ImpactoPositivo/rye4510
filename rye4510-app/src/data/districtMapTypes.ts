export type RegionData = {
  id: string;
  dataId: string;
  d: string;
  fill: string;
  name?: string;
  status: 'certified' | 'uncertified' | 'no-club' | 'outside';
};

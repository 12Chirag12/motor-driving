declare module "poisson-disk-sampling" {
  type Point = number[];

  type Options = {
    shape: number[];
    minDistance?: number;
    maxDistance?: number;
    tries?: number;
    distanceFunction?: (point: Point) => number;
  };

  export default class PoissonDiskSampling {
    constructor(options: Options, random?: () => number);
    addPoint(point: Point): Point | null;
    fill(): Point[];
    getAllPoints(): Point[];
    reset(): void;
  }
}

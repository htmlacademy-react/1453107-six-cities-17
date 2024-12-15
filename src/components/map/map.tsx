import { MapPlacementClass } from '../../types';

type MapProps = {
  placement: MapPlacementClass;
}

function Map({placement}: MapProps): JSX.Element {
  return(
    <section className={`${placement}__map map`}></section>
  );
}

export default Map;

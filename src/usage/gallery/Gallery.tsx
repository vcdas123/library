import img1 from "../../../public/images/img-1.jpeg";
import img2 from "../../../public/images/img-2.jpg";
import img3 from "../../../public/images/img-3.jpeg";
import img4 from "../../../public/images/img-4.jpg";
import img5 from "../../../public/images/img-5.jpg";
import img6 from "../../../public/images/img-6.jpg";
import img7 from "../../../public/images/img-7.jpg";
import img8 from "../../../public/images/img-8.jpg";

import Grid from "../../components/grid/Grid.Component";
import Img from "../../components/img/Img";

const Gallery = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Col span={2}>
            <Img src={img8} alt="Phyllis" />
          </Grid.Col>
          <Grid.Col>
            <Img src={img4} alt="Johnnie" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <Img src={img5} alt="Charles" />
          </Grid.Col>
          <Grid.Col span={2}>
            <Img src={img4} alt="Cesar" />
          </Grid.Col>
          <Grid.Col span={3}>
            <Img src={img3} alt="Alivia" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col span={3}>
            <Img src={img1} alt="Albertha" />
          </Grid.Col>
          <Grid.Col span={2}>
            <Img src={img7} alt="Israel" />
          </Grid.Col>
          <Grid.Col>
            <Img src={img6} alt="Jamison" />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Gallery;

import { Button, Card } from 'antd';
import history from '../../utils/history';
import { ROUTERS } from '../../constants/router';

import './styles.css';

function HomePage(props) {
  const { productList } = props;
  function renderProductList() {
    return productList.map((item, index) => {
      return (
        <Card key={index} size="small">
          <p>{item.name}</p>
          <Button
            type="primary"
            onClick={() => history.push(`/product/${item.id}`)}
          >
            Go to Detail
          </Button>
        </Card>
      )
    })
  }

  return (
    <div>
      Home
      <Button
        type="primary"
        onClick={() => history.push(ROUTERS.PRODUCT_LIST)}
      >
        Go to Product list
      </Button>
      {renderProductList()}
    </div>
  );
}
export default HomePage;

import Card from "../../components/Card";

const CardOverviewPage = ({ list }) => {
  return (
    <div>
      <div className="row">
        {list.items.map((item) => (
          <div className="col-4 my-5" key={item}>
            <Card>
              <div className="text-center">
                <h3>{item}</h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOverviewPage;

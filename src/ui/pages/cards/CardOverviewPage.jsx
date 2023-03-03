import Card from "../../components/Card";

const CardOverviewPage = ({ items }) => {
  return (
    <div>
      <div className="row">
        {items.map((item) => (
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

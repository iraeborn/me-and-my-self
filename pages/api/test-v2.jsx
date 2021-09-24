import main from "../../utils/dbConnect-v2";

main();
export default async (req, res) => {
    res.json({test: 'test'});
    //res.json(res);
}
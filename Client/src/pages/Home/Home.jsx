import "./Home.scss";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="page">
            <Link className="Link" to="/details"></Link>
        </div>
    );
}

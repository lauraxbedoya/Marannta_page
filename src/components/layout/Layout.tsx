import { Link } from "react-router-dom";
import useStyles from "../styles/layout-style";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonLayout from "../buttons/button-layout";
import MainButton from "../buttons/main-button";

const Layout = () => {
  const classes = useStyles();

  const handleCategory = () => {};

  return (
    <div>
      <div className={classes.container_layout}>
        <div className={classes.contact_company}>
          <p className={classes.track_your_order}>Sigue tu pedido</p>
          <p>Contáctanos</p>
        </div>
        <div className={classes.know_us_company}>
          <p className={classes.know_us}>Conócenos</p>
          <p>Servicio al cliente</p>
        </div>
      </div>






      <div className={classes.search_bar}>
        <div className="marannta d-flex align-items-center">
          <Link to="/" className={classes.name_company_menu}>MARANTTA</Link>
        </div>
        <div className={classes.search}>
          <SearchIcon className={classes.icon_search} />
          <input
            className={classes.input_search}
            type="search"
            placeholder="Busca por referencia o categoría..."
          />
        </div>
        <div className={classes.buttons_login}>
          <Link to="/customer/login"
            className={classes.user_login}
          >Entrar</Link>
          <Link to="/customer/signup" className={classes.user_login}>REGISTRARTE</Link>
        </div>
          <ShoppingCartIcon />
      </div>





      <div className={classes.bar_category}>
        <ButtonLayout
          onClick={handleCategory}
          text="Bodies en Encaje"
        />
        <ButtonLayout
          onClick={handleCategory}
          text="Otros Bodies"
        />
        <ButtonLayout
          onClick={handleCategory}
          text="Crop Tops"
        />
        <ButtonLayout
          onClick={handleCategory}
          text="Piel de Durazno"
        />
      </div>
    </div>
  );
};

export default Layout;
import { Outlet } from "react-router-dom";
import './Layout.css';
import logo from './assets/logo/favicon.png';
import './assets/css/font-awesome.min.css';
import './assets/css/linearicons.css';
import './assets/css/flaticon.css';
import './assets/css/animate.css';
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootsnav.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import Navbar from "./components/navbar";
import FooterLayout from "./components/footer";

function Layout() {
    return (
        <html class="no-js" lang="en">
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Rufina:400,700" rel="stylesheet" />
                <title>CarVilla</title>
                <link rel="shortcut icon" type="image/icon" href={logo} />
                <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            </head>
            <body>
                <Navbar/>
                <Outlet/>
                <FooterLayout />
            </body>
        </html>
    );
}

export default Layout;
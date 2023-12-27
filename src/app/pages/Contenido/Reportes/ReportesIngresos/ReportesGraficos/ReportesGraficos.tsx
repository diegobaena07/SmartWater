import { FC } from "react";
import "./ReportesGraficos.css";
import { Link, useNavigate } from "react-router-dom";
import { PageTitle } from "../../../../components/PageTitle/PageTitle";

const ReportesGraficos:FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Reportes/Ingresos');
    };
    
    return(
        <>
        <div>
            <div>
                <button className="btn" onClick={handleClick}>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
            </div>
            <PageTitle titulo="Graficos" icon="../../Reportes-icon.svg"/>
            <div className="ReportesGraficos-container">
                <Link to={"/Reportes/Ingresos/Graficos/PrestamosVsVentas"}>
                    <div className="ReportesGraficos-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M35 44V7C35 6.20435 34.6839 5.44129 34.1213 4.87868C33.5587 4.31607 32.7956 4 32 4H8C7.20435 4 6.44129 4.31607 5.87868 4.87868C5.31607 5.44129 5 6.20435 5 7V41C5 41.7956 5.31607 42.5587 5.87868 43.1213C6.44129 43.6839 7.20435 44 8 44H35ZM35 44H40C40.7956 44 41.5587 43.6839 42.1213 43.1213C42.6839 42.5587 43 41.7956 43 41V24C43 23.4696 42.7893 22.9609 42.4142 22.5858C42.0391 22.2107 41.5304 22 41 22H37C36.4696 22 35.9609 22.2107 35.5858 22.5858C35.2107 22.9609 35 23.4696 35 24V44Z" stroke="white" stroke-width="4" stroke-linejoin="round"/>
                            <path d="M11 12H19M11 19H23" stroke="white" strokeWidth="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Préstamos Vs Ventas</span>
                    </div>
                </Link>
                <Link to={"/Reportes/Ingresos/Graficos/VentasPorProductos"}>
                    <div className="ReportesGraficos-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="59" viewBox="0 0 41 59" fill="none">
                            <path d="M4.28403 27.333V50.8176C4.28403 57.1619 36.716 57.1619 36.716 50.8176L36.7156 27.333C36.7156 27.333 32.9624 23.3574 26.9121 23.3574C20.8636 23.3574 17.4959 27.7172 11.5239 27.7172C5.55267 27.7168 4.2832 27.333 4.2832 27.333L4.28403 27.333Z" fill="#F0F4FD"/>
                            <path d="M20.5004 59C11.5707 59 1.14318 57.4164 1.14318 52.9526V51.2468C0.444124 50.8212 0 50.0612 0 49.2349C0 48.4086 0.444136 47.6499 1.14318 47.2234V37.5061C0.444124 37.0805 0 36.3205 0 35.4934C0 34.6671 0.444136 33.9084 1.14318 33.4819V23.7645C0.444124 23.3381 0 22.579 0 21.7527C0 20.9241 0.447859 20.1621 1.15064 19.7376C1.39391 16.5806 7.84101 10.9251 15.4756 8.36276C15.463 8.2658 15.456 8.16793 15.456 8.06958C15.456 7.24747 15.8778 6.50719 16.561 6.07745V4.14461C16.0353 3.71356 15.7216 3.04172 15.7216 2.306C15.7216 1.03442 16.6681 0 17.8322 0H23.1692C24.3325 0 25.279 1.03442 25.279 2.306C25.279 3.04309 24.9649 3.71498 24.4397 4.14555V6.10274C25.0959 6.53746 25.5008 7.2695 25.5008 8.06911C25.5008 8.16285 25.4948 8.25567 25.4841 8.34851C33.1401 10.9053 39.6074 16.5701 39.8508 19.7385C40.5531 20.164 41 20.925 41 21.7531C41 22.5784 40.5563 23.3381 39.8582 23.7645V33.4827C40.5563 33.9083 41 34.6678 41 35.4932C41 36.3194 40.5563 37.0782 39.8582 37.5051V47.2233C40.5563 47.6488 41 48.4084 41 49.2338C41 50.0592 40.5563 50.8183 39.8582 51.2452V52.9515C39.8582 57.4163 29.4293 58.9999 20.4998 58.9999L20.5004 59ZM17.8324 1.32066C17.4129 1.32066 17.0578 1.77331 17.0578 2.30866C17.0578 2.70524 17.2494 3.06368 17.5467 3.22175L17.8967 3.40878V6.93071L17.4717 7.09476C17.0583 7.25422 16.7917 7.63747 16.7917 8.07219C16.7917 8.22062 16.8271 8.3695 16.8961 8.51472L17.22 9.19667L16.4916 9.42323C8.75539 11.8293 2.47805 17.4973 2.47805 19.9222V20.6147L2.03904 20.7728C1.61822 20.9245 1.33487 21.3197 1.33487 21.7558C1.33487 22.1923 1.61822 22.5884 2.03904 22.7405L2.47805 22.8986V34.3558L2.03904 34.5134C1.61822 34.6641 1.33487 35.0593 1.33487 35.4964C1.33487 35.9338 1.61729 36.3299 2.03904 36.4807L2.47805 36.6383V48.0968L2.03904 48.2544C1.61822 48.4051 1.33487 48.8003 1.33487 49.2373C1.33487 49.6739 1.61729 50.07 2.03904 50.2207L2.47805 50.3783V52.9541C2.47805 55.6065 10.3937 57.6841 20.499 57.6841C30.604 57.6841 38.52 55.607 38.52 52.9541V50.3788L38.9581 50.2207C39.3789 50.0691 39.6618 49.6739 39.6618 49.2373C39.6618 48.8012 39.3794 48.406 38.9581 48.2544L38.52 48.0963V36.6378L38.9581 36.4797C39.3789 36.3281 39.6618 35.9324 39.6618 35.4954C39.6618 35.0593 39.3794 34.6641 38.9581 34.5125L38.52 34.3544V22.8982L38.9581 22.7401C39.3789 22.5884 39.6618 22.1928 39.6618 21.7557C39.6618 21.3197 39.3794 20.9244 38.9581 20.7723L38.52 20.6143V19.9227C38.5196 17.4889 32.2243 11.8124 24.4695 9.41214L23.7467 9.18836L24.0627 8.50917C24.1293 8.36626 24.1629 8.21921 24.1629 8.07307C24.1629 7.64892 23.9061 7.2675 23.5095 7.10208L23.1021 6.93205V3.40694L23.4545 3.22037C23.7499 3.06368 23.9415 2.70569 23.9415 2.30774C23.9415 1.77192 23.5873 1.31974 23.1678 1.31974H17.8317L17.8324 1.32066Z" fill="#F0F4FD"/>
                        </svg>
                        <span>Ventas por producto</span>
                    </div>
                </Link>
                <Link to={"/Reportes/Ingresos/Graficos/VentasPorDistribuidor"}>
                    <div className="ReportesGraficos-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="50" viewBox="0 0 63 50" fill="none">
                            <g clipPath="url(#clip0_43_4174)">
                            <path d="M4.6875 0C2.09961 0 0 2.09961 0 4.6875V35.9375C0 38.5254 2.09961 40.625 4.6875 40.625H6.25C6.25 45.8008 10.4492 50 15.625 50C20.8008 50 25 45.8008 25 40.625H37.5C37.5 45.8008 41.6992 50 46.875 50C52.0508 50 56.25 45.8008 56.25 40.625H59.375C61.1035 40.625 62.5 39.2285 62.5 37.5C62.5 35.7715 61.1035 34.375 59.375 34.375V28.125V25V23.1738C59.375 21.5137 58.7207 19.9219 57.5488 18.75L50 11.2012C48.8281 10.0293 47.2363 9.375 45.5762 9.375H40.625V4.6875C40.625 2.09961 38.5254 0 35.9375 0H4.6875ZM40.625 15.625H45.5762L53.125 23.1738V25H40.625V15.625ZM10.9375 40.625C10.9375 39.3818 11.4314 38.1895 12.3104 37.3104C13.1895 36.4314 14.3818 35.9375 15.625 35.9375C16.8682 35.9375 18.0605 36.4314 18.9396 37.3104C19.8186 38.1895 20.3125 39.3818 20.3125 40.625C20.3125 41.8682 19.8186 43.0605 18.9396 43.9396C18.0605 44.8186 16.8682 45.3125 15.625 45.3125C14.3818 45.3125 13.1895 44.8186 12.3104 43.9396C11.4314 43.0605 10.9375 41.8682 10.9375 40.625ZM46.875 35.9375C48.1182 35.9375 49.3105 36.4314 50.1896 37.3104C51.0686 38.1895 51.5625 39.3818 51.5625 40.625C51.5625 41.8682 51.0686 43.0605 50.1896 43.9396C49.3105 44.8186 48.1182 45.3125 46.875 45.3125C45.6318 45.3125 44.4395 44.8186 43.5604 43.9396C42.6814 43.0605 42.1875 41.8682 42.1875 40.625C42.1875 39.3818 42.6814 38.1895 43.5604 37.3104C44.4395 36.4314 45.6318 35.9375 46.875 35.9375Z" fill="#F0F4FD"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_43_4174">
                            <rect width="62.5" height="50" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span>Ventas por distribuidor</span>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export{ReportesGraficos}
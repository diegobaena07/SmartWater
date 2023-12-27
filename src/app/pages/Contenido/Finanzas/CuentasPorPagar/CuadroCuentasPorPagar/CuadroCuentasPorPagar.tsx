import { FC, useContext } from "react";
import "./CuadroCuentasPorPagar.css";
import { CuentasPorPagarContext } from "../CuentasPorPagarContext";

const CuadroCuentasPorPagar: FC = () => {

    const { setShowMiniModal } = useContext(CuentasPorPagarContext)

    return(
        <>
        <div className="CuadroCuentasPorPagar-container">
            <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                <div className="CuadroVentaCliente-header">
                    <img src="../Cliente2.svg" alt="" />
                    <span>Rubén González</span>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <button type="button" className="btn" onClick={() => setShowMiniModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                            <path d="M4.75 5.5H12.25C12.4489 5.5 12.6397 5.57902 12.7803 5.71967C12.921 5.86032 13 6.05109 13 6.25C13 6.44891 12.921 6.63968 12.7803 6.78033C12.6397 6.92098 12.4489 7 12.25 7H4.75C4.55109 7 4.36032 6.92098 4.21967 6.78033C4.07902 6.63968 4 6.44891 4 6.25C4 6.05109 4.07902 5.86032 4.21967 5.71967C4.36032 5.57902 4.55109 5.5 4.75 5.5ZM4.75 10.5H12.25C12.4489 10.5 12.6397 10.579 12.7803 10.7197C12.921 10.8603 13 11.0511 13 11.25C13 11.4489 12.921 11.6397 12.7803 11.7803C12.6397 11.921 12.4489 12 12.25 12H4.75C4.55109 12 4.36032 11.921 4.21967 11.7803C4.07902 11.6397 4 11.4489 4 11.25C4 11.0511 4.07902 10.8603 4.21967 10.7197C4.36032 10.579 4.55109 10.5 4.75 10.5ZM0.75 0.5H7.25C7.44891 0.5 7.63968 0.579018 7.78033 0.71967C7.92098 0.860322 8 1.05109 8 1.25C8 1.44891 7.92098 1.63968 7.78033 1.78033C7.63968 1.92098 7.44891 2 7.25 2H0.75C0.551088 2 0.360322 1.92098 0.21967 1.78033C0.0790177 1.63968 0 1.44891 0 1.25C0 1.05109 0.0790177 0.860322 0.21967 0.71967C0.360322 0.579018 0.551088 0.5 0.75 0.5ZM1 12C0.734784 12 0.48043 11.8946 0.292893 11.7071C0.105357 11.5196 0 11.2652 0 11C0 10.7348 0.105357 10.4804 0.292893 10.2929C0.48043 10.1054 0.734784 10 1 10C1.26522 10 1.51957 10.1054 1.70711 10.2929C1.89464 10.4804 2 10.7348 2 11C2 11.2652 1.89464 11.5196 1.70711 11.7071C1.51957 11.8946 1.26522 12 1 12ZM2 6C2 6.26522 1.89464 6.51957 1.70711 6.70711C1.51957 6.89464 1.26522 7 1 7C0.734784 7 0.48043 6.89464 0.292893 6.70711C0.105357 6.51957 0 6.26522 0 6C0 5.73478 0.105357 5.48043 0.292893 5.29289C0.48043 5.10536 0.734784 5 1 5C1.26522 5 1.51957 5.10536 1.70711 5.29289C1.89464 5.48043 2 5.73478 2 6ZM12.314 2.918L10.07 0.417C10.0377 0.381061 10.0166 0.336546 10.0091 0.288837C10.0016 0.241128 10.008 0.192267 10.0277 0.148161C10.0474 0.104054 10.0794 0.06659 10.1199 0.040297C10.1604 0.014004 10.2077 7.78815e-06 10.256 0H14.744C14.7923 7.78815e-06 14.8396 0.014004 14.8801 0.040297C14.9206 0.06659 14.9526 0.104054 14.9723 0.148161C14.992 0.192267 14.9984 0.241128 14.9909 0.288837C14.9834 0.336546 14.9623 0.381061 14.93 0.417L12.686 2.917C12.6626 2.94311 12.6339 2.96398 12.6018 2.97828C12.5698 2.99257 12.5351 2.99996 12.5 2.99996C12.4649 2.99996 12.4302 2.99257 12.3982 2.97828C12.3661 2.96398 12.3374 2.94311 12.314 2.917V2.918Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <span className="CuadroVentaCliente-body" style={{color: "#1A3D7D", fontWeight: "600"}}>
                        Saldo a pagar.
                    </span>
                    <div className="moneda-cliente">
                        <img src="../Moneda-icon.svg" alt=""/>
                        <div>
                            <span>100 Bs.</span>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
                    <div className="CuadroCuentasPorCobrar-text">
                        <span>Total a Cuenta</span>
                    </div>
                    <div className="CuadroCuentasPorCobrar-pago">
                        <span>100</span>
                        <span style={{color: "#000", borderLeft: "1px solid #000", paddingLeft: "12px", padding: "6px 0px 6px 12px"}}>Bs.</span>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                <button className="btn CuadroCuentasPorCobrar-btn">
                    <span>Registrar Cobro</span>
                </button>
            </div>
        </div>
        </>
    )
}

export{CuadroCuentasPorPagar}
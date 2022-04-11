module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
            months: {
                type: Sequelize.BIGINT
            },
            pptoVenta: {
                type: Sequelize.BIGINT,
                get() {
                    const pptoV = this.getDataValue('pptoVenta');
                    return parseInt(pptoV);
                }
            },
            VentaEjecutada: {
                type: Sequelize.BIGINT,
                get() {
                    const ventaEjec = this.getDataValue('VentaEjecutada');
                    return parseInt(ventaEjec);
                }
            },
            Cumplimiento: {
                type: Sequelize.DOUBLE,
                get() {
                    const VentaEjec = this.getDataValue('VentaEjecutada');
                    const pptAc = this.getDataValue('PresupuestoAcumulado');
                    if(pptAc == 0){
                        return 0;
                    } else {
                    return VentaEjec / pptAc;
                    }
                }
            },
            VentaActual: {
                type: Sequelize.BIGINT,
                get(){
                    const VentaAc = this.getDataValue('VentaActual');
                    return parseInt(VentaAc);
                }
            },
            PorcentajeVentaActual: {
                type: Sequelize.DOUBLE
            },
            VentaNueva: {
                type: Sequelize.BIGINT,
                get() {
                    const VentaNu = this.getDataValue('VentaNueva');
                    return parseInt(VentaNu);
                }

            },
            PorcentajeVentaNueva: {
                type: Sequelize.DOUBLE
            },
            PresupuestoAcumulado: {
                type: Sequelize.BIGINT,
                get() {
                    const pAcum = this.getDataValue('PresupuestoAcumulado');
                    return parseInt(pAcum);
                }
            },
            ComisionAct: {
                type: Sequelize.BIGINT,
                get() {
                    const clienteFact = this.getDataValue('VentaActual');
                    const cumpl = this.getDataValue('Cumplimiento');
                    const role = this.getDataValue('rol');

                    if( role === 'vendedor') {

                    const limite1 = 50;
                    const limite2 = 60;
                    const limite3 = 70;
                    const limite4 = 80;
                    const limite5 = 90;
                    const limite6 = 100;

                    comisionActual1 = 0.004;
                    comisionActual2 = 0.005;
                    comisionActual3 = 0.006;
                    comisionActual4 = 0.006;
                    comisionActual5 = 0.006;
                    comisionActual6 = 0.006;

                    if( cumpl >= 0 && cumpl <= limite1 ) {
                        return clienteFact * parseInt(comisionActual1);
                    }

                    if(cumpl >= 51 && cumpl <= limite2) {
                        return clienteFact * parseInt(comisionActual2);
                    }

                    if(cumpl >= 61 && cumpl <= limite3) {
                        return clienteFact * parseInt(comisionActual3);
                    }

                    if(cumpl >= 71 && cumpl <= limite4 ) {
                        return clienteFact * parseInt(comisionActual4);
                    }

                    if(cumpl >= 81 && cumpl <= limite5) {
                        return clienteFact * parseInt(comisionActual5);
                    }

                    if(cumpl >= 91 && cumpl <= limite6){
                        return clienteFact *  parseInt(comisionActual6);
                    }

                    }

                    if( role === 'coordinador') {

                    const limite1 = 50;
                    const limite2 = 60;
                    const limite3 = 70;
                    const limite4 = 80;
                    const limite5 = 90;
                    const limite6 = 100;

                    comisionActual1 = 0.001;
                    comisionActual2 = 0.001;
                    comisionActual3 = 0.001;
                    comisionActual4 = 0.001;
                    comisionActual5 = 0.001;
                    comisionActual6 = 0.001;

                    if( cumpl >= 0 && cumpl <= limite1 ) {
                        return clienteFact * parseInt(comisionActual1);
                    }

                    if(cumpl >= 51 && cumpl <= limite2) {
                        return clienteFact * parseInt(comisionActual2);
                    }

                    if(cumpl >= 61 && cumpl <= limite3) {
                        return clienteFact * parseInt(comisionActual3);
                    }

                    if(cumpl >= 71 && cumpl <= limite4 ) {
                        return clienteFact * parseInt(comisionActual4);
                    }

                    if(cumpl >= 81 && cumpl <= limite5) {
                        return clienteFact * parseInt(comisionActual5);
                    }

                    if(cumpl >= 91 && cumpl <= limite6){
                        return clienteFact *  parseInt(comisionActual5);
                    }


                    }


                    if( role === 'general') {

                        const limite1 = 50;
                        const limite2 = 60;
                        const limite3 = 70;
                        const limite4 = 80;
                        const limite5 = 90;
                        const limite6 = 100;

                        comisionActual1 = 0.0040;
                        comisionActual2 = 0.0050;
                        comisionActual3 = 0.0060;
                        comisionActual4 = 0.0060;
                        comisionActual5 = 0.0060;
                        comisionActual6 = 0.0060;

                        if( cumpl >= 0 && cumpl <= limite1 ) {
                            return clienteFact * parseInt(comisionActual1);
                        }

                        if(cumpl >= 51 && cumpl <= limite2) {
                            return clienteFact * parseInt(comisionActual2);
                        }

                        if(cumpl >= 61 && cumpl <= limite3) {
                            return clienteFact * parseInt(comisionActual3);
                        }

                        if(cumpl >= 71 && cumpl <= limite4 ) {
                            return clienteFact * parseInt(comisionActual4);
                        }

                        if(cumpl >= 81 && cumpl <= limite5) {
                            return clienteFact * parseInt(comisionActual5);
                        }

                        if(cumpl >= 91 && cumpl <= limite6){
                            return clienteFact *  parseInt(comisionActual5);
                        }


                        }

                    return 0;
                }
            },
            ComisionNue: {
                type: Sequelize.BIGINT,
                get() {
                    const valueVentaNueva = this.getDataValue('VentaNueva');
                    const cumpl = this.getDataValue('Cumplimiento');
                    const role = this.getDataValue('rol');

                    if( role === 'vendedor') {

                    const limite1 = 50;
                    const limite2 = 60;
                    const limite3 = 70;
                    const limite4 = 80;
                    const limite5 = 90;
                    const limite6 = 100;

                    comisionNueva1 = 0.0080;
                    comisionNueva2 = 0.0093;
                    comisionNueva3 = 0.0095;
                    comisionNueva4 = 0.0096;
                    comisionNueva5 = 0.0098;
                    comisionNueva6 = 0.0098;

                    if( cumpl >= 0 && cumpl <= limite1 ) {
                        return valueVentaNueva * parseInt(comisionNueva1);
                    }

                    if(cumpl >= 51 && cumpl <= limite2) {
                        return valueVentaNueva * parseInt(comisionNueva2);
                    }

                    if(cumpl >= 61 && cumpl <= limite3) {
                        return valueVentaNueva * parseInt(comisionNueva3);
                    }

                    if(cumpl >= 71 && cumpl <= limite4 ) {
                        return valueVentaNueva * parseInt(comisionNueva4);
                    }

                    if(cumpl >= 81 && cumpl <= limite5) {
                        return valueVentaNueva * parseInt(comisionNueva5);
                    }

                    if(cumpl >= 91 && cumpl <= limite6){
                        return valueVentaNueva * parseInt(comisionNueva5);
                    }

                    }


                    if( role === 'coordinador') {

                        const limite1 = 50;
                        const limite2 = 60;
                        const limite3 = 70;
                        const limite4 = 80;
                        const limite5 = 90;
                        const limite6 = 100;

                        comisionNueva1 = 0.0045;
                        comisionNueva2 = 0.0045;
                        comisionNueva3 = 0.0045;
                        comisionNueva4 = 0.0045;
                        comisionNueva5 = 0.0045;
                        comisionNueva6 = 0.0045;

                        if( cumpl >= 0 && cumpl <= limite1 ) {
                            return valueVentaNueva * parseInt(comisionNueva1);
                        }

                        if(cumpl >= 51 && cumpl <= limite2) {
                            return valueVentaNueva * parseInt(comisionNueva2);
                        }

                        if(cumpl >= 61 && cumpl <= limite3) {
                            return valueVentaNueva * parseInt(comisionNueva3);
                        }

                        if(cumpl >= 71 && cumpl <= limite4 ) {
                            return valueVentaNueva * parseInt(comisionNueva4);
                        }

                        if(cumpl >= 81 && cumpl <= limite5) {
                            return valueVentaNueva * parseInt(comisionNueva5);
                        }

                        if(cumpl >= 91 && cumpl <= limite6){
                            return valueVentaNueva * parseInt(comisionNueva5);
                        }

                        }


                        if( role === 'general') {

                            const limite1 = 50;
                            const limite2 = 60;
                            const limite3 = 70;
                            const limite4 = 80;
                            const limite5 = 90;
                            const limite6 = 100;

                            comisionNueva1 = 0.0080;
                            comisionNueva2 = 0.0093;
                            comisionNueva3 = 0.0095;
                            comisionNueva4 = 0.0096;
                            comisionNueva5 = 0.0098;
                            comisionNueva6 = 0.0098;

                            if( cumpl >= 0 && cumpl <= limite1 ) {
                                return valueVentaNueva * parseInt(comisionNueva1);
                            }

                            if(cumpl >= 51 && cumpl <= limite2) {
                                return valueVentaNueva * parseInt(comisionNueva2);
                            }

                            if(cumpl >= 61 && cumpl <= limite3) {
                                return valueVentaNueva * parseInt(comisionNueva3);
                            }

                            if(cumpl >= 71 && cumpl <= limite4 ) {
                                return valueVentaNueva * parseInt(comisionNueva4);
                            }

                            if(cumpl >= 81 && cumpl <= limite5) {
                                return valueVentaNueva * parseInt(comisionNueva5);
                            }

                            if(cumpl >= 91 && cumpl <= limite6){
                                return valueVentaNueva * parseInt(comisionNueva5);
                            }

                            }

                    return 0;

                }
            },
            salarioTotal: {
                type: Sequelize.BIGINT,
                get() {
                    const sbase = parseInt(this.getDataValue('monthSalary'));
                    const cActual = parseInt(this.getDataValue('ComisionAct'));
                    const cNueva = parseInt(this.getDataValue('ComisionNue'));

                    return parseInt(sbase +  cActual + cNueva);

                }
            },
            usuarioLogueado: {
                type: Sequelize.STRING
            },
            representante: {
                type: Sequelize.STRING
            },
            monthSalary: {
                type: Sequelize.BIGINT,
                get(){
                    const monthSal = parseInt(this.getDataValue('monthSalary'));
                    const role = this.getDataValue('rol');

                    if(role === 'vendedor' || role === 'coordinador')
                    {
                        return parseInt(monthSal);
                    }

                      // if(role === 'general') {
                     //    return 2050000*4)
                    // }

                    return monthSal;

                }
            },
            pptoMensual: {
                type: Sequelize.BIGINT,
                get(){
                    const pptMon = parseInt(this.getDataValue('pptoMensual'));
                    return parseInt(pptMon);
                }
            },
            pptoAnual: {
                type: Sequelize.BIGINT,
                get() {
                    const pptoValue = this.getDataValue('pptoAnual');
                    const rolValue =  this.getDataValue('rol');

                    if(rolValue === 'coordinador') {
                        return parseInt(pptoValue*4);
                    }

                    if(rolValue === 'general') {
                        return parseInt(pptoValue*4);
                    }

                    return parseInt(pptoValue);
                }
            },
            rol: {
                type: Sequelize.STRING
            },
    });
    return Test;
};
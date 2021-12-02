export class Factura {
    _id!:string;
    tendero!: String;
    codigoFactura!: String;
    metodo_pago!: String;
    producto!: {
        articulos: [Number],
        cantidad: [Number]
    };
    cantidad_vendida!: Number;
    total_venta!: Number;
}

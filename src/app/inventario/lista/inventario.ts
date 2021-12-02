export class Inventario {
    _id!:String;
    tendero!: String;
    productos!:{
        producto: String;
        productoId: String;
        }
    info_inventario!:{
        fecha: String;
        cantidad: Number;
        minimoStock: Number;
        costoTotal: Number;
        precioVenta: Number;
        entryType: String
        }
}

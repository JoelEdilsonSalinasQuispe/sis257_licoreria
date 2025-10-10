"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const venta_entity_1 = require("../../ventas/entities/venta.entity");
const typeorm_1 = require("typeorm");
let Producto = class Producto {
    id;
    nombre;
    tipo;
    marca;
    precio;
    rol;
    stock;
    descripcion;
    imagen;
    ventas;
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', { name: 'id_producto ' }),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 60, name: 'nombre_producto' }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 60 }),
    __metadata("design:type", String)
], Producto.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 60 }),
    __metadata("design:type", String)
], Producto.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 60 }),
    __metadata("design:type", String)
], Producto.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Producto.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150, name: 'imagen_url ' }),
    __metadata("design:type", String)
], Producto.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => venta_entity_1.Venta, (Venta) => Venta.producto),
    __metadata("design:type", Array)
], Producto.prototype, "ventas", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('productos')
], Producto);
//# sourceMappingURL=producto.entity.js.map
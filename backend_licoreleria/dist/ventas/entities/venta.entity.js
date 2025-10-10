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
exports.Venta = void 0;
const producto_entity_1 = require("../../productos/entities/producto.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Venta = class Venta {
    id;
    idUsuario;
    idProducto;
    fechaVenta;
    montoTotal;
    metodoPago;
    producto;
    usuario;
};
exports.Venta = Venta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', { name: 'id_venta' }),
    __metadata("design:type", Number)
], Venta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'id_usuario' }),
    __metadata("design:type", Number)
], Venta.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'id_producto' }),
    __metadata("design:type", Number)
], Venta.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_venta ' }),
    __metadata("design:type", Date)
], Venta.prototype, "fechaVenta", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'monto_total' }),
    __metadata("design:type", Number)
], Venta.prototype, "montoTotal", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'metodo_pago' }),
    __metadata("design:type", Number)
], Venta.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.ventas),
    (0, typeorm_1.JoinColumn)({ name: 'id_producto', referencedColumnName: 'id' }),
    __metadata("design:type", producto_entity_1.Producto)
], Venta.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.ventas),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario', referencedColumnName: 'id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Venta.prototype, "usuario", void 0);
exports.Venta = Venta = __decorate([
    (0, typeorm_1.Entity)('ventas')
], Venta);
//# sourceMappingURL=venta.entity.js.map
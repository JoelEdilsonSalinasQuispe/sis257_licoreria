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
exports.Usuario = void 0;
const venta_entity_1 = require("../../ventas/entities/venta.entity");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
    id;
    nombre;
    correo;
    contraseña;
    rol;
    fechaResgistro;
    ventas;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity', { name: 'id_usuario' }),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 80 }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 60 }),
    __metadata("design:type", String)
], Usuario.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { enum: ['admin', 'cliente'] }),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_registro' }),
    __metadata("design:type", Date)
], Usuario.prototype, "fechaResgistro", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => venta_entity_1.Venta, (Venta) => Venta.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "ventas", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map
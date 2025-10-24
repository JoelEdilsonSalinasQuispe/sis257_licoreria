import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { read } from 'fs';

export class CreateVentaDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo id del usuario debe estar definido' })
  @IsInt({ message: 'El campo id del usuario debe ser numérico' })
  readonly idUsuario: number;
  @ApiProperty()
  @IsDefined({ message: 'El campo id del producto debe estar definido' })
  @IsInt({ message: 'El campo id del producto debe ser numérico' })
  readonly idProducto: number;
  @ApiProperty()
  @IsDefined({ message: 'El campo fecha de venta debe estar definido' })
  @IsDateString(
    {},
    { message: 'El campo fecha de venta debe ser una fecha válida' },
  )
  readonly fechaVenta: Date;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo monto total es obligatorio' })
  @IsNumber({}, { message: 'El campo monto total debe ser un número' })
  @IsPositive({ message: 'El campo monto total debe ser mayor a 0' })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseFloat(value);
    }
    return value;
  })
  readonly montoTotal: number;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo metodo de pago  es obligatorio' })
  @IsNumber({}, { message: 'El campo metodo de pago debe ser un número' })
  @IsIn(['efectivo', 'tarjeta', 'depósito'], {
    message: 'Método de pago no válido',
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseFloat(value);
    }
    return value;
  })
  readonly metodoPago: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El campo nombre no debe ser mayor a 60 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipo es obligatorio' })
  @IsString({ message: 'El campo tipo debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El campo tipo no debe ser mayor a 60 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly tipo: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El marca tipo es obligatorio' })
  @IsString({ message: 'El marca tipo debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El marca tipo no debe ser mayor a 60 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly marca: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio es obligatorio' })
  @IsNumber({}, { message: 'El campo precio debe ser un número' })
  @IsPositive({ message: 'El campo precio debe ser mayor a 0' })
  @Transform(({ value }) =>
    typeof value === 'string' ? parseFloat(value) : value,
  )
  readonly precio: number;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo stock es obligatorio' })
 @IsNotEmpty({ message: 'El campo stock es obligatorio' })
  @IsNumber({}, { message: 'El campo stock debe ser un número' })
  @Min(0, { message: 'El campo stock no puede ser negativo' })
  @Transform(({ value }) => (typeof value === 'string' ? parseInt(value, 10) : value))
  readonly stock: number;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipo es obligatorio' })
  @IsString({ message: 'El campo tipo debe ser de tipo cadena' })
  @MaxLength(80, { message: 'El campo tipo no debe ser mayor a 80 caracteres' })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly descripcion: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fotografia es obligatorio' })
  @IsString({ message: 'El campo fotografia debe ser de tipo cadena' })
  @MaxLength(250, {
    message: 'El campo fotografia no debe ser mayor a 250 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly imagen: string;
}

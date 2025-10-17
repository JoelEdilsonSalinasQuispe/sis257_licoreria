import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe estar vacío' })
  @IsString({ message: 'El campo nombre debe ser de tip cadena' })
  @MaxLength(50, {
    message: 'El campo nombre no debe exceder los 50 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  readonly nombre: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo correo es obligatorio' })
  @IsEmail({}, { message: 'El campo correo debe ser un email válido' })
  @MaxLength(80, {
    message: 'El campo correo no debe exceder los 80 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  readonly correo: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo correo es obligatorio' })
  @MaxLength(60, {
    message: 'El campo correo no debe exceder los 60 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  readonly contraseña: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo rol es obligatorio' })
  @IsString({ message: 'El campo rol debe ser de tipo cadena' })
  @IsIn(['admin', 'cliente'], {
    message: 'El campo rol debe ser: admin o cliente',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  readonly rol: string;
  @ApiProperty()
  @IsDefined({ message: 'El campo fecha de reguistro debe estar definido' })
  @IsDateString(
    {},
    { message: 'El campo fecha de reguistro debe ser una fecha válida' },
  )
  readonly fechaResgistro: Date;
}

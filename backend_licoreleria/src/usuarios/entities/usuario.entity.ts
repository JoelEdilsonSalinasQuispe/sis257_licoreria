import { Venta } from 'src/ventas/entities/venta.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('identity', { name: 'id_usuario' })
  id: number;
  @Column('varchar', { length: 50 })
  nombre: string;
  @Column('varchar', { length: 80 })
  correo: string;
  @Column('varchar', { length: 60 })
  contraseña: string;
  @Column('enum', { enum: ['admin', 'cliente'] })
  rol: string;
  @Column('date', { name: 'fecha_registro' })
  fechaResgistro: Date;

  @OneToMany(() => Venta, (Venta) => Venta.usuario)
  ventas: Venta[];
}

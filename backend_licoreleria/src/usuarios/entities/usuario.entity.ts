import { Venta } from 'src/ventas/entities/venta.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @OneToMany(() => Venta, (Venta) => Venta.usuario)
  ventas: Venta[];
}

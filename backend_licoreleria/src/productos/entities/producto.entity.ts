import { Venta } from 'src/ventas/entities/venta.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('identity', { name: 'id_producto ' })
  id: number;
  @Column('varchar', { length: 60, name: 'nombre_producto' })
  nombre: string;
  @Column('varchar', { length: 60 })
  tipo: string;
  @Column('varchar', { length: 60 })
  marca: string;
  @Column('decimal')
  precio: number;
  @Column('int')
  stock: number;
  @Column('varchar', { length: 80 })
  descripcion: string;
  @Column('varchar', { length: 250, name: 'imagen_url ' })
  imagen: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @OneToMany(() => Venta, (Venta) => Venta.producto)
  ventas: Venta[];
}

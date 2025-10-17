import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './entities/venta.entity';

@Injectable()
export class VentasService {
  constructor(@InjectRepository(Venta) private ventasRepository: Repository<Venta>) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    let venta = await this.ventasRepository.findOneBy({
      fechaVenta: createVentaDto.fechaVenta,
      montoTotal: createVentaDto.montoTotal,
      metodoPago: createVentaDto.metodoPago,
    });
    if (venta) throw new ConflictException('El venta ya existe');

    venta = new Venta();
    Object.assign(venta, createVentaDto);
    return this.ventasRepository.save(venta);
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find();
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOneBy({ id });
    if (!venta) throw new NotFoundException('El venta no existe');
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    Object.assign(venta, updateVentaDto);
    return this.ventasRepository.save(venta);
  }

  async remove(id: number): Promise<Venta> {
    const venta = await this.findOne(id);
    return this.ventasRepository.softRemove(venta);
  }
}

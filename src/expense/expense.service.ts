/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
// Update the import path if your DTOs are located elsewhere, for example:
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateExpenseDto) {
    return this.prisma.expense.create({ data });
  }

  findAll(month?: string, year?: string) {
    const where: any = {};
    if (month && year) {
      const start = new Date(`${year}-${month}-01`);
      const end = new Date(start);
      end.setMonth(end.getMonth() + 1);
      where.date = { gte: start, lt: end };
    }

    return this.prisma.expense.findMany({ where });
  }

  findOne(id: string) {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateExpenseDto) {
    return this.prisma.expense.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.expense.delete({ where: { id } });
  }
}

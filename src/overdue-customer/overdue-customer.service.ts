import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OverdueCustomer } from './overdue-customer.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class OverdueCustomerService {
  constructor(
    @InjectRepository(OverdueCustomer)
    private customerRepo: Repository<OverdueCustomer>
  )
  {

  }

  async createCustomer(name, email, amount, since): Promise<OverdueCustomer>
  {
    const customer = this.customerRepo.create({
      id: uuid(),
      name: name,
      email: email,
      amount: amount,
      since: since
    });

    return this.customerRepo.save(customer);

  }

  async getAllOverdueCustomers(): Promise<OverdueCustomer[]>
  {
    return this.customerRepo.find();
  }


}

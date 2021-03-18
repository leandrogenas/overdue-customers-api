import { Controller, Get, Options, Post } from "@nestjs/common";
import { throws } from "assert";
import { OverdueCustomerService } from "./overdue-customer.service";

@Controller('overdueCustomers')
export class OverdueCustomerController {

  constructor(
    private readonly overdueCustomerService: OverdueCustomerService
  )
  {

  }

  @Post()
  async postAll()
  {
    return this.optAllOverdueCustomers();
  }

  @Get()
  async getAll()
  {
    return this.optAllOverdueCustomers();
  }

  @Options()
  async optAllOverdueCustomers()
  {
    return {
      items: await this.overdueCustomerService.getAllOverdueCustomers()
    }
  }

  @Get('/metadata')
  async getMetadata()
  {
    return {
      version: 1,
      title: 'Clientes inadimplentes',
      fields: [
        { property: 'id', key: true, disabled: true, hidden: true },
        { property: 'name'},
        { property: 'email'},
        { property: 'amount'},
        { property: 'since'}
      ],
      keepFilters: true
    }
  }

}
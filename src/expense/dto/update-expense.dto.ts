/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { CreateExpenseDto } from "./create-expense.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateExpenseDto extends PartialType(CreateExpenseDto){}
import { PartialType } from '@nestjs/mapped-types';
import { CreateLivematchDto } from './create-livematch.dto';

export class UpdateLivematchDto extends PartialType(CreateLivematchDto) {}

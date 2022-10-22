import { Controller } from '@nestjs/common';
import { FlowOptionsService } from './flow-options.service';

@Controller('flow-options')
export class FlowOptionsController {
  constructor(private readonly flowOptionsService: FlowOptionsService) {}
}

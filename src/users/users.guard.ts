import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';

@Guard()
export class UsersGuard implements CanActivate {
    canActivate(dataOrRequest, context: ExecutionContext) {
        console.log('aqui')
        return true;
    }
}
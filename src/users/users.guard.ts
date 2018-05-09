import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Guard()
export class UsersGuard implements CanActivate {
    canActivate(dataOrRequest, context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('aqui')
        return true;
    }
}
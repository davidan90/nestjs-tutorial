import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';

@Guard()
export class UsersGuard implements CanActivate {
    canActivate(request, context: ExecutionContext) {
        console.log('UserGuard ', request.params);
        return true;
    }
}
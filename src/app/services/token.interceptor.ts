import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let token = '';
  let jwtToken = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + token,
    },
  });
  return next(jwtToken);
};

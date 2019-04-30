/* eslint-disable @typescript-eslint/no-explicit-any */
const ErrorHander = {
  init(app, logger): void {
    // 捕获内部错误
    app.use(
      async (ctx, next): Promise<any> => {
        try {
          await next();
        } catch (e) {
          logger.error(JSON.stringify(e));
          ctx.status = 500;
          ctx.body = '内部错误';
        }
      }
    );
    // 捕获404错误
    app.use(
      async (ctx, next): Promise<any> => {
        await next();
        if (ctx.status === 404) {
          ctx.body = '没有找到页面😰...';
        }
      }
    );
  }
};

export default ErrorHander;

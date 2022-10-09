export interface AuthServicesInterface {
  comparePasswordUseCase: {
    execute(userPassword: string, userEmail: string): Promise<boolean>;
  };

  generateTokenUseCase: {
    execute(userEmail: string): string;
  };

  validateTokenUseCase: {
    execute(userToken: string): Promise<boolean>;
  };
}

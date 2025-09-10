// 이넘 연습문제++
//1번
{
  enum UserStatus {
    UNVERIFIED = "UNVERIFIED",
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
  }

  function getUserStatus(status: UserStatus): string {
    if (status === UserStatus.UNVERIFIED) return "User is unverified";
    if (status === UserStatus.PENDING) return "User verification is pending";
    if (status === UserStatus.VERIFIED) return "User is verified";
    return "Unknown status";
  }
}

//2번
{
  enum OrderState {
    INITIATED = 0,
    PROCESSING = 1,
    SHIPPED = 2,
    DELIVERED = 3,
    CANCELLED = 4,
  }

  function getOrderState(state: OrderState): string {
    if (state === OrderState.INITIATED) return "Order initiated";
    if (state === OrderState.PROCESSING) return "Order being processed";
    if (state === OrderState.SHIPPED) return "Order shipped";
    if (state === OrderState.DELIVERED) return "Order delivered";
    if (state === OrderState.CANCELLED) return "Order cancelled";
    return "Unknown state";
  }
}

//3번
{
  enum UserLevel {
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    EXPERT = "EXPERT",
  }

  function getUserLevel(level: UserLevel): string {
    if (level === UserLevel.BEGINNER) return "Beginner user";
    if (level === UserLevel.INTERMEDIATE) return "Intermediate user";
    if (level === UserLevel.EXPERT) return "Expert user";
    return "Unknown level";
  }
}

//4번
{
  enum PaymentStatus {
    NOT_STARTED,
    IN_PROGRESS,
    COMPLETED,
    FAILED,
  }

  function getPaymentStatus(status: PaymentStatus): string {
    if (status === PaymentStatus.NOT_STARTED) return "Payment not started";
    if (status === PaymentStatus.IN_PROGRESS) return "Payment in progress";
    if (status === PaymentStatus.COMPLETED) return "Payment completed";
    if (status === PaymentStatus.FAILED) return "Payment failed";
    return "Unknown status";
  }
}

//5번
{
  enum SignupStep {
    STEP_ONE = "STEP_ONE",
    STEP_TWO = "STEP_TWO",
    STEP_THREE = "STEP_THREE",
  }

  function getSignupStep(step: SignupStep): string {
    if (step === SignupStep.STEP_ONE) return "Step 1: Enter details";
    if (step === SignupStep.STEP_TWO) return "Step 2: Confirm email";
    if (step === SignupStep.STEP_THREE) return "Step 3: Complete registration";
    return "Unknown step";
  }
}

//6번
{
  enum PriceByCarType {
    SEDAN = 30000,
    SUV = 40000,
    TRUCK = 50000,
  }
  const SEDAN = "SEDAN";
  const SUV = "SUV";
  const TRUCK = "TRUCK";

  function getPriceByCarType(type: string): number {
    if (type === PriceByCarType[30000]) return 30000;
    if (type === PriceByCarType[40000]) return 40000;
    if (type === PriceByCarType[50000]) return 50000;
    return 0;
  }
}

//7번
{
  enum MessageType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    FILE = "FILE",
  }

  function getMessageType(type: MessageType): string {
    if (type === MessageType.TEXT) return "Text message";
    if (type === MessageType.IMAGE) return "Image message";
    if (type === MessageType.VIDEO) return "Video message";
    if (type === MessageType.FILE) return "File message";
    return "Unknown message type";
  }
}

//8번
{
  enum log {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    DEBUG = "DEBUG",
  }

  function logMessage(level: log, message: string): void {
    if (level === log.INFO) console.log("INFO: " + message);
    if (level === log.WARN) console.warn("WARN: " + message);
    if (level === log.ERROR) console.error("ERROR: " + message);
    if (level === log.DEBUG) console.debug("DEBUG: " + message);
  }
}

//9번
{
  enum DayType {
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND",
  }

  function getDayType(day: string): string {
    if (day === DayType.WEEKDAY) return "It's a weekday";
    if (day === DayType.WEEKEND) return "It's a weekend";
    return "Unknown day type";
  }
}

//10번
{
  enum CampaignType {
    DISCOUNT = "DISCOUNT",
    PROMOTION = "PROMOTION",
    GIVEAWAY = "GIVEAWAY",
  }

  function getCampaignType(type: CampaignType): string {
    if (type === CampaignType.DISCOUNT) return "Discount campaign";
    if (type === CampaignType.PROMOTION) return "Promotion campaign";
    if (type === CampaignType.GIVEAWAY) return "Giveaway campaign";
    return "Unknown campaign type";
  }
}

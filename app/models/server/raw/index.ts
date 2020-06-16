import PermissionsModel from '../models/Permissions';
import { PermissionsRaw } from './Permissions';
import RolesModel from '../models/Roles';
import { RolesRaw } from './Roles';
import SubscriptionsModel from '../models/Subscriptions';
import { SubscriptionsRaw } from './Subscriptions';
import SettingsModel from '../models/Settings';
import { SettingsRaw } from './Settings';
import UsersModel from '../models/Users';
import { UsersRaw } from './Users';
import RoomsModel from '../models/Rooms';
import { RoomsRaw } from './Rooms';
import LivechatOfficeHourModel from '../models/LivechatOfficeHour';
import { LivechatOfficeHourRaw } from './LivechatOfficeHour';
import LivechatCustomFieldModel from '../models/LivechatCustomField';
import { LivechatCustomFieldRaw } from './LivechatCustomField';
import LivechatTriggerModel from '../models/LivechatTrigger';
import { LivechatTriggerRaw } from './LivechatTrigger';
import LivechatDepartmentModel from '../models/LivechatDepartment';
import { LivechatDepartmentRaw } from './LivechatDepartment';
import LivechatDepartmentAgentsModel from '../models/LivechatDepartmentAgents';
import { LivechatDepartmentAgentsRaw } from './LivechatDepartmentAgents';
import LivechatRoomsModel from '../models/LivechatRooms';
import { LivechatRoomsRaw } from './LivechatRooms';
import MessagesModel from '../models/Messages';
import { MessagesRaw } from './Messages';
import LivechatExternalMessagesModel from '../models/LivechatExternalMessages';
import { LivechatExternalMessageRaw } from './LivechatExternalMessages';
import LivechatVisitorsModel from '../models/LivechatVisitors';
import { LivechatVisitorsRaw } from './LivechatVisitors';
import LivechatInquiryModel from '../models/LivechatInquiry';
import { LivechatInquiryRaw } from './LivechatInquiry';
import IntegrationsModel from '../models/Integrations';
import { IntegrationsRaw } from './Integrations';
import EmojiCustomModel from '../models/EmojiCustom';
import { EmojiCustomRaw } from './EmojiCustom';
import WebdavAccountsModel from '../models/WebdavAccounts';
import { WebdavAccountsRaw } from './WebdavAccounts';
import OAuthAppsModel from '../models/OAuthApps';
import { OAuthAppsRaw } from './OAuthApps';
import CustomSoundsModel from '../models/CustomSounds';
import { CustomSoundsRaw } from './CustomSounds';
import CustomUserStatusModel from '../models/CustomUserStatus';
import { CustomUserStatusRaw } from './CustomUserStatus';
import LivechatAgentActivityModel from '../models/LivechatAgentActivity';
import { LivechatAgentActivityRaw } from './LivechatAgentActivity';
import StatisticsModel from '../models/Statistics';
import { StatisticsRaw } from './Statistics';
import NotificationQueueModel from '../models/NotificationQueue';
import { NotificationQueueRaw } from './NotificationQueue';
import ServerEventModel from '../models/ServerEvents';
import { ServerEventsRaw } from './ServerEvents';

export const Permissions = new PermissionsRaw(PermissionsModel.model.rawCollection());
export const Roles = new RolesRaw(RolesModel.model.rawCollection());
export const Subscriptions = new SubscriptionsRaw(SubscriptionsModel.model.rawCollection());
export const Settings = new SettingsRaw(SettingsModel.model.rawCollection());
export const Users = new UsersRaw(UsersModel.model.rawCollection());
export const Rooms = new RoomsRaw(RoomsModel.model.rawCollection());
export const LivechatOfficeHour = new LivechatOfficeHourRaw(LivechatOfficeHourModel.model.rawCollection());
export const LivechatCustomField = new LivechatCustomFieldRaw(LivechatCustomFieldModel.model.rawCollection());
export const LivechatTrigger = new LivechatTriggerRaw(LivechatTriggerModel.model.rawCollection());
export const LivechatDepartment = new LivechatDepartmentRaw(LivechatDepartmentModel.model.rawCollection());
export const LivechatDepartmentAgents = new LivechatDepartmentAgentsRaw(LivechatDepartmentAgentsModel.model.rawCollection());
export const LivechatRooms = new LivechatRoomsRaw(LivechatRoomsModel.model.rawCollection());
export const Messages = new MessagesRaw(MessagesModel.model.rawCollection());
export const LivechatExternalMessage = new LivechatExternalMessageRaw(LivechatExternalMessagesModel.model.rawCollection());
export const LivechatVisitors = new LivechatVisitorsRaw(LivechatVisitorsModel.model.rawCollection());
export const LivechatInquiry = new LivechatInquiryRaw(LivechatInquiryModel.model.rawCollection());
export const Integrations = new IntegrationsRaw(IntegrationsModel.model.rawCollection());
export const EmojiCustom = new EmojiCustomRaw(EmojiCustomModel.model.rawCollection());
export const WebdavAccounts = new WebdavAccountsRaw(WebdavAccountsModel.model.rawCollection());
export const OAuthApps = new OAuthAppsRaw(OAuthAppsModel.model.rawCollection());
export const CustomSounds = new CustomSoundsRaw(CustomSoundsModel.model.rawCollection());
export const CustomUserStatus = new CustomUserStatusRaw(CustomUserStatusModel.model.rawCollection());
export const LivechatAgentActivity = new LivechatAgentActivityRaw(LivechatAgentActivityModel.model.rawCollection());
export const Statistics = new StatisticsRaw(StatisticsModel.model.rawCollection());
export const NotificationQueue = new NotificationQueueRaw(NotificationQueueModel.model.rawCollection());
export const ServerEvents = new ServerEventsRaw(ServerEventModel.model.rawCollection());

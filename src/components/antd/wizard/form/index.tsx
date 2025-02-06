'use client';

import { DevTool } from '@hookform/devtools';
import { Button, Card, Space, Tabs, TabsProps, notification } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  FormProvider,
  UseFormReturn,
  useForm,
  useFormContext,
} from 'react-hook-form';

import { ArticleFormValues } from '@/types/pages/articles';

import LoadPreviousButton from '../fields/load-previous';
import ContentForm from './content';
import ExtraForm from './extra';
import SettingsForm from './settings';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Content`,
    children: <ContentForm />,
  },
  {
    key: '2',
    label: `Settings`,
    children: <SettingsForm />,
  },
  {
    key: '3',
    label: `Extra contents`,
    children: <ExtraForm />,
  },
];

type ArticleFormKey = ObjectDotNotation<ArticleFormValues>;

export enum ArticleFormMode {
  create = 'create',
  edit = 'edit',
  view = 'view',
}

const contentFormKeys: ArticleFormKey[] = [
  'title',
  'headlineImageText',
  'headlineImgFile',
  'content',
];

const contentFormRequiredKeys: ArticleFormKey[] = ['title', 'content'];

const settingsFormKeys: ArticleFormKey[] = [
  'localeId',
  'siteSectionIds',
  'timeSpent',
];

const settingsFormRequiredKeys: ArticleFormKey[] = [
  'localeId',
  'siteSectionIds',
];

const extraFormKey: ArticleFormKey[] = ['quickpoll'];

const formatFormValues = (
  initialValues?: Partial<ArticleFormValues>
): Partial<ArticleFormValues> => {
  if (initialValues) {
    return {
      title: initialValues?.title,
      content: initialValues?.content,
      localeId: initialValues?.localeId,
      headlineImageText: initialValues?.headlineImageText,
      siteSectionIds: initialValues?.siteSectionIds,
      timeSpent: initialValues?.timeSpent,
      quickpoll: initialValues?.quickpoll,
      metadata: initialValues?.metadata,
    };
  }
  return {};
};

const EXPIRATION_TIME_MS = 24 * 60 * 60 * 1000; // 1 day

const useKeepPreviousValues = (
  methods: UseFormReturn<ArticleFormValues, any, undefined>
) => {
  const formData = methods.watch();
  const articleStoreKey = `articles_create_${'userId'}`;
  const storeFormValues = useCallback(
    (data: ArticleFormValues) => {
      const metadata = data.metadata?.filter(
        (value) => value.id && value.content
      );
      localStorage.setItem(
        articleStoreKey,
        JSON.stringify({
          data: {
            ...data,
            // filter empty
            metadata: (metadata?.length ?? 0) > 0 ? metadata : undefined,
          },
          expirationTime: dayjs()
            .add(EXPIRATION_TIME_MS, 'millisecond')
            .toISOString(),
        })
      );
    },
    [articleStoreKey]
  );

  const loadPreviousValues = useCallback(() => {
    const previousValues = localStorage.getItem(articleStoreKey);
    if (previousValues) {
      methods.reset(JSON.parse(previousValues).data);
    }
  }, [articleStoreKey, methods]);

  const removePreviousValues = useCallback(() => {
    console.log('remove');
    localStorage.removeItem(articleStoreKey);
  }, [articleStoreKey]);

  const [hasPreviousValues, setHasPreviousValues] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(methods.formState.dirtyFields)) {
      storeFormValues(formData);
    }
  }, [formData, methods.formState.dirtyFields, storeFormValues]);

  // when expired
  useEffect(() => {
    const interval = setInterval(() => {
      const previousValues = localStorage.getItem(articleStoreKey);
      if (previousValues) {
        const { expirationTime } = JSON.parse(previousValues);
        if (dayjs(expirationTime).isBefore(dayjs())) {
          removePreviousValues();
        }
      }
      setHasPreviousValues(!!previousValues);
    }, 1000);
    return () => clearInterval(interval);
  }, [removePreviousValues, articleStoreKey]);
  return {
    hasPreviousValues,
    loadPreviousValues,
    removePreviousValues,
  };
};

const useArticleForm = ({
  initialValues,
  formMode,
}: {
  initialValues: ComponentProps<typeof ArticleForm>['initialValues'];
  formMode: ComponentProps<typeof ArticleForm>['formMode'];
}) => {
  const methods = useForm<ArticleFormValues>({
    defaultValues: formatFormValues(initialValues),
  });

  const hasFormError = useMemo(
    () => (list: ArticleFormKey[]) => {
      return list.some((key) =>
        Object.keys(methods.formState.errors).includes(key)
      );
    },
    [methods.formState.errors]
  );

  const needRequired = useMemo(
    () => (list: ArticleFormKey[]) => {
      return !list.every((key) => {
        return Object.keys(methods.getValues()).includes(key);
      });
    },
    [methods]
  );

  const isCreate = useMemo(
    () => formMode === ArticleFormMode.create,
    [formMode]
  );

  const isEdit = useMemo(() => formMode === ArticleFormMode.edit, [formMode]);

  const { hasPreviousValues, loadPreviousValues, removePreviousValues } =
    useKeepPreviousValues(methods);

  return {
    ...methods,
    formMode,
    initialValues,
    isCreate,
    isEdit,
    hasPreviousValues,
    hasFormError,
    needRequired,
    loadPreviousValues,
    removePreviousValues,
  };
};

export const useArticleFormContext = () => {
  const methods = useFormContext<ArticleFormValues>();
  return { ...methods } as ReturnType<typeof useArticleForm>;
};

type ArticleCreateFormProps = {
  initialValues?: undefined;
  formMode: ArticleFormMode.create;
  onSuccess?: (value?: any) => void;
  onError?: (error?: any) => void;
  onCancel?: () => void;
};

type ArticleEditFormProps = {
  initialValues?: Partial<ArticleFormValues>;
  formMode: ArticleFormMode.edit;
  onSuccess?: (value?: any) => void;
  onError?: (error?: any) => void;
  onCancel?: () => void;
};

const ArticleForm: React.FC<ArticleCreateFormProps | ArticleEditFormProps> = ({
  initialValues,
  formMode,
  onSuccess,
  onError,
  onCancel,
}) => {
  const methods = useArticleForm({ formMode, initialValues });

  const [api, contextHolder] = notification.useNotification();
  const [tab, setTab] = useState<string>(items[0]['key']);

  const onSubmit = useCallback(async () => {
    await methods.trigger();

    const isUnfinishContentValue = methods.needRequired(
      contentFormRequiredKeys
    );
    const isUnfinishSettingsValue = methods.needRequired(
      settingsFormRequiredKeys
    );
    const isContentFormError = methods.hasFormError(contentFormKeys);
    const isSettingsFormError = methods.hasFormError(settingsFormKeys);
    const isExtraFormError = methods.hasFormError(extraFormKey);

    if (isUnfinishContentValue || isContentFormError) {
      setTab(items[0]['key']);
    } else if (isUnfinishSettingsValue || isSettingsFormError) {
      setTab(items[1]['key']);
    } else if (isExtraFormError) {
      setTab(items[2]['key']);
    } else {
      methods.handleSubmit(async (data) => {
        try {
          methods.removePreviousValues();
          methods.reset();
          api.open({
            message: 'Create article success',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            showProgress: true,
            type: 'success',
          });
          onSuccess?.();
        } catch (error) {
          api.open({
            message: 'Create article failed',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            showProgress: true,
            type: 'error',
          });
          onError?.(error);
        }
      })();
    }
  }, [methods, formMode, onSuccess, onError]);

  return (
    <FormProvider {...methods}>
      {contextHolder}
      <Card>
        <Tabs
          activeKey={tab}
          items={items}
          onChange={(activeKey) => {
            setTab(activeKey);
          }}
          tabBarExtraContent={
            <Space wrap>
              {formMode === ArticleFormMode.create && <LoadPreviousButton />}
              <Button
                loading={methods.formState.isSubmitting}
                onClick={onSubmit}
                type="primary"
              >
                Save & Close
              </Button>
              <Button onClick={onCancel}>Cancel</Button>
            </Space>
          }
        />
      </Card>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default ArticleForm;

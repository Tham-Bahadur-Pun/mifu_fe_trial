"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Skeleton,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getCampaignForm, InfluencerCampaignForm } from "../../lib/api";

const Form = () => {
  const {
    data: campaignData,
    error,
    isLoading,
  } = useQuery<InfluencerCampaignForm>({
    queryKey: ["campaignData"],
    queryFn: () => getCampaignForm("2"),
    staleTime: 60 * 1000,
    retry: 3,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log("FORM SUBMITTED:", values);
  };

  if (error) alert(error);

  const getImages = (social: string): string => {
    const images: Record<string, string> = {
      instagram: "/images/instagram.png",
      tiktok: "/images/tiktok.png",
      twitter: "/images/twitter.png",
      youtube: "/images/youtube.png",
    };
    return images[social];
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box boxShadow="2xl" borderRadius="10" p="2em">
        <Text fontWeight="bold" mb="1rem" color="#232859">
          Apply Now
        </Text>

        {isLoading && <SkeletonForm />}

        {campaignData?.default_fields.map((field, index) => (
          <FormControl mb="1.5em" key={field} isInvalid={!!errors[field]}>
            <FormLabel htmlFor="field">
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/_/, " ")}
            </FormLabel>
            <Input
              size="lg"
              id={field}
              placeholder={
                field.charAt(0).toUpperCase() + field.slice(1).replace(/_/, " ")
              }
              {...register(field, { required: true })}
              type={field === "email" ? "email" : "text"}
              _placeholder={{ fontSize: "0.875rem", fontWeight: "normal" }}
              fontSize="14"
              fontWeight="600"
            />
            <FormErrorMessage>
              {errors[field] &&
                `${
                  field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/_/, " ")
                } is required.`}
            </FormErrorMessage>
          </FormControl>
        ))}

        <Box>
          {campaignData?.socials.length && (
            <Text
              color="#232859"
              mb="0.7em"
              fontSize="14"
              lineHeight="1.5em"
              fontWeight="500"
            >
              Your Socials
            </Text>
          )}
          {campaignData?.socials.map((social, index) => (
            <Flex
              alignItems="center"
              justifyContent="center"
              mb="1.5em"
              gap="2"
              key={social}
            >
              <Image src={getImages(social)} alt={social + "logo"} />
              <FormControl isInvalid={!!errors[social]}>
                <InputGroup size="lg">
                  <InputLeftAddon
                    background="none"
                    paddingInline="0.625em"
                    fontWeight="700"
                  >
                    @
                  </InputLeftAddon>
                  <Input
                    id="instagram_user"
                    placeholder={`${
                      social.charAt(0).toUpperCase() + social.slice(1)
                    } Username`}
                    {...register(social)}
                    paddingLeft="0"
                    borderLeft="none"
                    _placeholder={{
                      fontSize: "0.875rem",
                      fontWeight: "normal",
                    }}
                    fontSize="14"
                    fontWeight="600"
                  />
                  <FormErrorMessage>
                    {errors[social] &&
                      `${
                        social.charAt(0).toUpperCase() + social.slice(1)
                      } is required.`}
                  </FormErrorMessage>
                </InputGroup>
              </FormControl>
            </Flex>
          ))}
        </Box>

        {campaignData?.custom_fields.map((customField, index) => (
          <FormControl
            mb="1.5em"
            key={customField.name}
            isInvalid={!!errors[customField.name]}
          >
            {customField.type !== "boolean" && (
              <FormLabel htmlFor={customField.name}>
                {customField.question}
              </FormLabel>
            )}
            {customField.type === "longtext" && (
              <Textarea
                size="lg"
                id={customField.name}
                placeholder="Your Answer"
                {...register(customField.name, {
                  required: customField.is_required,
                })}
                _placeholder={{ fontSize: "0.875rem", fontWeight: "normal" }}
                fontSize="14"
                fontWeight="600"
              />
            )}
            {customField.type === "shortext" && (
              <Input
                size="lg"
                id={customField.name}
                placeholder="Your Answer"
                type="text"
                {...register(customField.name, {
                  required: customField.is_required,
                })}
                _placeholder={{ fontSize: "0.875rem", fontWeight: "normal" }}
                fontSize="14"
                fontWeight="600"
              />
            )}
            {customField.type === "boolean" && (
              <Checkbox
                id={customField.name}
                {...register(customField.name, {
                  required: customField.is_required,
                })}
              >
                <Text fontSize="0.875rem" color="#232859" fontWeight="500">
                  {customField.question}
                </Text>
              </Checkbox>
            )}
            <FormErrorMessage>
              {errors[customField.name] && `This is required field.`}
            </FormErrorMessage>
          </FormControl>
        ))}
      </Box>
      <Button
        float="right"
        mt="8"
        paddingInline="10"
        fontSize="medium"
        borderRadius="15"
        fontWeight="normal"
        type="submit"
        size="lg"
        variant="solid"
        colorScheme="#5957d5"
      >
        Submit
      </Button>
    </form>
  );
};

const SkeletonForm = () =>
  [1, 2, 3, 4, 5].map((data) => (
    <Stack key={data} mb="1.5em">
      <Skeleton height="1.25em" width="3.125em" />
      <Skeleton height="2.5em" />
    </Stack>
  ));

export default Form;

import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import {Image, Stack, Heading, Button} from '@chakra-ui/react'

export default function Profile(props) {
  return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        marginTop='1rem'
        bg="black"
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={props.url}
            alt='profile image'
            width="40%"
        />

        <Stack>
            <CardBody>
                <Heading size='md' color='#2980b9'>{props.name}</Heading>
            </CardBody>

            <CardFooter>
            <a href={props.link} target="_blank">
                <Button variant='solid' colorScheme='blue'>
                    Profile Link
                </Button>
            </a>
            </CardFooter>
        </Stack>
    </Card>
  )
}

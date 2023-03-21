import {GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";

import {Setup as SetupData, SetupComponent} from '@models';
import {ArticleHeader, Container, ReadingBar, Wrapper} from '@components';
import {ReactNode} from "react";

const baseUrl = process.env.API_BASE_URL;

export const getStaticProps: GetStaticProps<{ setup: SetupData }> = async (context) => {
    
    const setup: SetupData = await fetch(`${baseUrl}/setup`).then(res => res.json());
    
    return {
        revalidate: 86400,
        props: {
            setup
        }
    }
}

export default function Setup({ setup }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <title>Setup: Henrique Melo</title>
            </Head>

            <Container>
                <ReadingBar></ReadingBar>
                <Wrapper screen="xl">
                    <section id='setup'>
                        <div>
                            <ArticleHeader title="Setup" subtitle="Meu ambiente de desenvolvimento" />


                            <div className="flex flex-col gap-12">
                                <SetupCategory name="Computers">
                                    <SetupComponentsGrid>
                                        <SetupComponentCard name="Notebook" component={setup.notebook}></SetupComponentCard>
                                        <SetupComponentCard name="Desktop" component={setup.desktop}></SetupComponentCard>
                                    </SetupComponentsGrid>
                                </SetupCategory>

                                <SetupCategory name="Monitors">
                                    <SetupComponentsGrid>
                                        { setup.monitor.map((monitor, index) => (
                                            <SetupComponentCard key={index} name="Monitor" component={monitor}></SetupComponentCard>
                                        ))}
                                    </SetupComponentsGrid>
                                </SetupCategory>

                                <SetupCategory name="Streaming & Meeting">
                                    <SetupComponentsGrid>
                                        { setup.headphone.map((headphone, index) => (
                                            <SetupComponentCard key={index} name="Headphone" component={headphone}></SetupComponentCard>
                                        ))}

                                        <SetupComponentCard name="Microphone" component={setup.microphone}></SetupComponentCard>
                                        <SetupComponentCard name="Webcam" component={setup.webcam}></SetupComponentCard>
                                    </SetupComponentsGrid>
                                </SetupCategory>

                                <SetupCategory name="Extras">
                                    <SetupComponentsGrid>
                                        <SetupComponentCard name="E-Reader" component={setup.eReader}></SetupComponentCard>
                                        <SetupComponentCard name="Lightbar" component={setup.lightBar}></SetupComponentCard>
                                        <SetupComponentCard name="Drawing Table" component={setup.drawingTable}></SetupComponentCard>
                                        <SetupComponentCard name="Hub" component={setup.usbHub}></SetupComponentCard>
                                    </SetupComponentsGrid>
                                </SetupCategory>
                            </div>
                        </div>
                    </section>
                </Wrapper>
            </Container>
        </>
    )
}

const SetupCategory = ({name, children}: {name: string, children: ReactNode}) => (
    <div>
        <h3 className='text-xl font-semibold text-secondary mb-4'>{name}</h3>
        {children}
    </div>
)

const SetupComponentsGrid = ({children}: {children: ReactNode}) => (
    <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-6 space-y-4 2xl:space-y-0'>
        {children}
    </div>
)

const SetupComponentCard = ({name, component}: {name: string, component: SetupComponent }) => (
    <>
        {component?.description && <div className={"w-full border-[1px] border-white bg-neutral-800 box-shadow shadow-inner p-4"}>
            <h4 className='text-lg font-medium'> {name} {component.description}</h4>
            {component.specs && <p className='mt-1 text-xs text-gray-500'>{component.specs}</p>}
            {component.resume && <p className='mt-3 text-sm font-thin text-gray-400'>{component.resume}</p>}
        </div>}
    </>
)
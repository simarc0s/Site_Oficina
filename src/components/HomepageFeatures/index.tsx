import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Compra produtos',
    Svg: require('@site/static/img/compra.svg').default,
    description: (
      <>
        Neste site poderá comprar peças, carros, produtos mais específicos
        tais como lubrificantes para as peças, óleo ou qualquer outro tipo de artigo em loja. Para
        mais informações consulte os contactos do staff abaixo desta mesma sub-categoria.
      </>
    ),
  },
  {
    title: 'Venda/Troca peças',
    Svg: require('@site/static/img/venda.svg').default,
    description: (
      <>
        Aqui também irá poder vender ou trocar qualquer tipo de produtos/peças ou até carros
        por inteiro. Se pretender vender um veículo terá de o mobilizar á oficina
        para uma avaliação local.
      </>
    ),
  },
  {
    title: 'Reparação',
    Svg: require('@site/static/img/reparations.svg').default,
    description: (
      <>
        Também fazemos QUALQUER tipo de reparação desde dos elétricos até aos de vapor. Para
        informações adicionais terás que se dirigir á oficina mais próxima. O diagnóstico é
        por conta da casa.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

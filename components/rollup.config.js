import del from 'rimraf';
import postcss from 'rollup-plugin-postcss';

const fileSplittings = [
    'index',
    'Alert',
    'Button'
];

function fileConfig(fileName) {
    return {
        input: `./src/${fileName}.js`,
        output: {
            dir: 'lib',
            file: fileName + '.js',
            format: 'cjs'
        },
        plugins: [
            postcss({
                modules: true,
                extract: `lib/${fileName}.css`
            })
        ]
    };
};

del('./lib/*', {}, () => {});

export default fileSplittings.map(fileConfig);